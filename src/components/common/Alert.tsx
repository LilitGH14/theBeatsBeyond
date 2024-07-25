"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { alertService } from "@/services/alert";

const Alert = () => {
  const mounted = useRef<boolean>(false);

  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    mounted.current = true;

    const subscription = alertService.onAlert().subscribe((alert) => {
      if (!alert.message) {
        setAlerts((alerts) => {
          const filteredAlerts = alerts.filter((x) => x.keepAfterRouteChange);
          return omit(filteredAlerts, "keepAfterRouteChange");
        });
      } else {
        alert.itemId = Math.random();
        setAlerts((alerts) => [...alerts, alert]);

        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 3000);
        }
      }
    });

    return () => {
      mounted.current = false;
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const omit = (arr: any, key: any) => {
    return arr.map((obj: any) => {
      const { [key]: omitted, ...rest } = obj;
      return rest;
    });
  };

  const removeAlert = (alert: any) => {
    if (!mounted.current) return;

    setAlerts((alerts: any) =>
      alerts.map((x: any) =>
        x.itemId === alert.itemId ? { ...x, fade: true } : x
      )
    );

    setTimeout(() => {
      setAlerts((alerts) =>
        alerts.filter((x: any) => x.itemId !== alert.itemId)
      );
    }, 250);
  };

  if (!alerts.length) return null;

  return (
    <div>
      {alerts.map((alert, index) => (
        <div key={index} className={`${alert.type.toLowerCase()}`}>
          <div className="bb-alert">
            <div className="bb-alert-content ms-bg-2">
              <div className="modal-header">
                <i
                  className="fa fa-times"
                  role="button"
                  onClick={() => removeAlert(alert)}
                ></i>
              </div>
              <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alert;
