import { vi, expect } from 'vitest';
import axios from 'axios';
import { fetchStoriesData } from "../../services/stories";

describe("Stories", () => {
  it("Render stories", async () => {
    const mockData = {ResponseData: [] , ResponseCode:200 };
    vi.mock('axios');
    axios.get.mockResolvedValueOnce( mockData );

    const result = await fetchStoriesData();

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(`/assets/mock/stories_data.json`);
  });
});
