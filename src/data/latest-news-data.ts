import imageOne from "../../public/assets/img/news/news-01.png";
import imageTwo from "../../public/assets/img/news/news-02.png";
import imageThree from "../../public/assets/img/news/news-03.png";
//event-imgae
import eventImg1 from '../../public/assets/img/blog/story.jpg';
//news image 
import newsImg1 from '../../public/assets/img/news/news-06.jpg';
import newsImg2 from '../../public/assets/img/news/news-04.jpg';
import newsImg3 from '../../public/assets/img/news/news-05.jpg';
import newsImg4 from '../../public/assets/img/banner/title-bg.jpg';
//blog sidebar img
import SidebarImg1 from '../../public/assets/img/news/news-rc-01.jpg';
import SidebarImg2 from '../../public/assets/img/news/news-rc-02.jpg';
import SidebarImg3 from '../../public/assets/img/news/news-rc-03.jpg';
import SidebarImg4 from '../../public/assets/img/news/news-rc-04.jpg';

import { TLetestNews } from "@/types/types";

const latest_news_data: TLetestNews[] = [
    {
        id: 1,
        category: "DJ Party Event",
        image: imageOne,
        title: "more, our live music To The guaran tee means that",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Feb 15, 2023",
        comment: 14
    },
    {
        id: 2,
        category: "Wedding Party",
        image: imageTwo,
        title: "The first dance as a married couple has become",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 20, 2023",
        comment: 3
    },
    {
        id: 3,
        category: "Event",
        image: imageThree,
        title: "Our exclusive ange of live bands for hire have experience",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Jan 10, 2023",
        comment: 10
    },
    //home-2 latest news data
    {
        id: 4,
        category: "Event",
        image: imageOne,
        title: "What's More, Our Live Music To The Guaran Tee Means That",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Jan 07, 2023",
        comment: 7
    },
    {
        id: 5,
        category: "Wedding Party",
        image: imageTwo,
        title: "The First Dance As A Married Couple Has Become",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Feb 05, 2023",
        comment: 10
    },
    {
        id: 6,
        category: "DJ Party Event",
        image: imageThree,
        title: "Our Exclusive Range Of Live Bands For Hire Have Experience",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 14, 2023",
        comment: 14
    },
    //home-3 data
    {
        id: 7,
        category: "Event",
        image: imageOne,
        title: "What's more, our live music To The guaran tee means that",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Feb 27, 2023",
        comment: 7
    },
    {
        id: 8,
        category: "Wedding Party",
        image: imageTwo,
        title: "The first dance as a married couple has become",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 01, 2023",
        comment: 10
    },
    {
        id: 9,
        category: "DJ Party Event",
        image: imageThree,
        title: "Our exclusive range of live bands for hire have experience",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 02, 2023",
        comment: 20
    },
    {
        id: 10,
        category: "Wedding Party",
        image: imageTwo,
        title: "The first dance as a married couple has become",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 01, 2023",
        comment: 10
    },
    {
        id: 11,
        category: "DJ Party Event",
        image: imageThree,
        title: "Our exclusive range of live bands for hire have experience",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 02, 2023",
        comment: 20
    },
    {
        id: 12,
        category: "Event",
        image: imageOne,
        title: "What's more, our live music To The guaran tee means that",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Feb 27, 2023",
        comment: 7
    },
    {
        id: 13,
        category: "Wedding Party",
        image: imageTwo,
        title: "The first dance as a married couple has become",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 01, 2023",
        comment: 10
    },
    {
        id: 14,
        category: "DJ Party Event",
        image: imageThree,
        title: "Our exclusive range of live bands for hire have experience",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 02, 2023",
        comment: 20
    },
    {
        id: 15,
        category: "Wedding Party",
        image: imageTwo,
        title: "The first dance as a married couple has become",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 01, 2023",
        comment: 10
    },
    //event page data
    {
        id: 16,
        category: "DJ Party Event",
        image: eventImg1,
        month: "FEB",
        title: "Jennifer Lopez admits ending first engagement to Ben Affleck caused 'biggest heartbreak'",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "28",
        locationName: "Chicago",
        comment: 10
    },
    {
        id: 17,
        category: "Wedding Party",
        image: eventImg1,
        month: "MAR",
        title: " We are a group of artists, musicians, producers, DJ's, inventors, engineers, activists",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "02",
        locationName: "Ohio",
        comment: 7
    },
    {
        id: 18,
        category: "Event",
        image: eventImg1,
        month: "MAR",
        title: "abilities to perform, create, design, organize, track and manage different details along the way",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "04",
        locationName: "Trenton",
        comment: 9
    },
    {
        id: 19,
        category: "Wedding Party",
        image: eventImg1,
        month: "MAR",
        title: "Justin Ancheta, the founder of  Soul Graffiti is a musician, activist, teacher, environmentalist",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "07",
        locationName: "Georgia",
        comment: 12
    },
    {
        id: 20,
        category: "DJ Party Event",
        image: eventImg1,
        month: "MAR",
        title: "spent much of his life committed to weaving together and connecting communities in the bay",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "16",
        locationName: "Concord",
        comment: 18
    },
    {
        id: 21,
        category: "Wedding Party",
        image: eventImg1,
        month: "Mar",
        title: "There are too many other people to name who have inspired and breathe life into supporting",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "13",
        locationName: "NYE City",
        comment: 9
    },
    {
        id: 22,
        category: "DJ Party Event",
        image: eventImg1,
        month: "May",
        title: " If you would like to hear more, please feel free to give us a call... or better yet, hire.",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "23",
        locationName: "Thailand",
        comment: 11
    },
    {
        id: 23,
        category: "Wedding Party",
        image: eventImg1,
        month: "Jun",
        title: "ourselves a lucky group of people, to share this experience together",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "12",
        locationName: "City Club",
        comment: 18
    },
    {
        id: 24,
        category: "Event",
        image: eventImg1,
        month: "Jan",
        title: "rapport and access to skill, knowledge and raw talent that exists here. We hope to share.",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "18",
        locationName: "Pakistan",
        comment: 15
    },
    //blog news data
    {
        id: 25,
        category: "DJ Party Event",
        image: newsImg1,
        title: "Joss Stone announces 2023 London Palladium gig, Joss Stone will play the iconic London Palladium",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help and support 24 hours a day, 7 days a week, right up until Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        date: "Nov 15, 2022",
        locationName: "Thailand",
        comment: 15
    },
    {
        id: 26,
        category: "Wedding Party",
        image: newsImg2,
        title: "Unforgettable Wedding Entertainment: Joss Stone to Grace 2023 London Palladium Gig",
        description: "Elevate your wedding celebration with hand-picked acts ensuring fantastic entertainment at every turn. Join us at the iconic London Palladium, where the soulful Joss Stone will serenade your special day. Our outstanding wedding band will play chart-toppers, indie hits, rock anthems, and Britpop, featuring guitars and keyboards.",
        date: "Mar 15, 2023",
        locationName: "Pakistan",
        comment: 11
    },
    {
        id: 27,
        category: "DJ Party Event",
        image: newsImg3,
        title: "ou see, when I was doing my album, a lot of stuff on my album, I'll go And so I was in Germany",
        description: "Prepare for an electrifying DJ party experience that transcends the ordinary! Elevate your celebration with carefully curated acts, ensuring fantastic entertainment at every turn. Immerse yourself in the iconic ambiance of London Palladium, where the soulful Joss Stone will serenade your special day.",
        date: "Mar 20, 2023",
        videoUrl: "3FWSZ6lvaSk",
        locationName: "NYE City",
        comment: 8
    },
    {
        id: 28,
        category: "Wedding Party",
        image: newsImg4,
        title: "Unforgettable Wedding Entertainment: Joss Stone to Grace 2023 London Palladium Gig",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help and support 24 hours a day, 7 days a week, right up until Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuringguitars, keyboards.",
        date: "Apr 07, 2023",
        locationName: "Chicago",
        comment: 8
    },
    //sidebar block data
    {
        id: 29,
        category: "Wedding Party",
        image: SidebarImg1,
        title: "The Garage King - who has won five MOBOs",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 15, 2023",
        comment: 10
    },
    {
        id: 30,
        category: "DJ Party Event",
        image: SidebarImg2,
        title: "showed off the hi-tech toilets Drake gave him as a gif",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 02, 2023",
        comment: 20
    },
    {
        id: 31,
        category: "Wedding Party",
        image: SidebarImg3,
        title: "In an Instagram video, the DJ who turned 47 on Saturday",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 01, 2023, 2023",
        comment: 10
    },
    {
        id: 32,
        category: "DJ Party Event",
        image: SidebarImg4,
        title: "DJ Khaled receives four luxury toilets from Drake for.",
        description: "Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We'll provide help.",
        date: "Mar 02, 2023",
        comment: 20
    },
]

export default latest_news_data;