import { TTestimonialData } from "@/types/types";
import testimonialImgOne from '../../public/assets/img/testimonial/testimonial-06.png';
import testimonialImgTwo from '../../public/assets/img/testimonial/testimonial-img-2.png';
import testimonialImgThree from '../../public/assets/img/testimonial/testimonial-img-4.png';
import testimonialSignatureImg from "../../public/assets/img/testimonial/testimonial-signature.png";

const testimonial_data: TTestimonialData[] = [
    {
        id: 1,
        description: "assumenda fugiat ut quibusdam aliquid qui molestiae itaque est atque iste ea ipsum adipisci ut rerum voluptas ex autem aliquid.Ut voluptatem voluptate et distinctio fuga vel dicta magni.",
        authorName: "David Camerun",
        title: "Media Public Manager"
    },
    {
        id: 2,
        description: "assumenda fugiat ut quibusdam aliquid qui molestiae itaque est atque iste ea ipsum adipisci ut rerum voluptas ex autem aliquid.Ut voluptatem voluptate et distinctio fuga vel dicta magni.",
        authorName: "David Camerun",
        title: "Media Public Manager"
    },
    {
        id: 3,
        description: "assumenda fugiat ut quibusdam aliquid qui molestiae itaque est atque iste ea ipsum adipisci ut rerum voluptas ex autem aliquid.Ut voluptatem voluptate et distinctio fuga vel dicta magni.",
        authorName: "David Camerun",
        title: "Media Public Manager"
    },
    {
        id: 4,
        signatureImg: testimonialSignatureImg,
        image: testimonialImgOne,
        description: "Musicaly transformed our events into symphonic experiences. The harmonious blend of melodies created an enchanting atmosphere that captivated everyone. A true masterpiece in the world of musical innovation!",
        authorName: "Melissa Harmony",
        designation: "Event Coordinator - Harmonic Events"
    },
    {
        id: 5,
        signatureImg: testimonialSignatureImg,
        image: testimonialImgTwo,
        description: "The magic of Musicaly is unparalleled. Its rhythmic enchantment resonated with our audience, creating an unforgettable auditory journey. Musicaly is not just a project; it's a transformative symphony!",
        authorName: "Dio Caprio",
        designation: "CEO - XYZ Innovation"
    },
    {
        id: 6,
        signatureImg: testimonialSignatureImg,
        image: testimonialImgThree,
        description: "In the realm of musical innovation, Musicaly stands as a virtuoso. Its ability to harmonize diverse sounds is nothing short of extraordinary. As a CEO, I endorse Musicaly for its revolutionary impact on auditory experiences.",
        authorName: "Sophia Cadence",
        designation: "CEO - Crescendo Enterprises"
    },
    {
        id: 7,
        signatureImg: testimonialSignatureImg,
        image: testimonialImgOne,
        description: "Musicaly transformed our events into symphonic experiences. The harmonious blend of melodies created an enchanting atmosphere that captivated everyone. A true masterpiece in the world of musical innovation!",
        authorName: "Melissa Harmony",
        designation: "Event Coordinator - Harmonic Events"
    },
    {
        id: 8,
        signatureImg: testimonialSignatureImg,
        image: testimonialImgTwo,
        description: "The musical performance was beyond our expectations. It added a magical touch to our special day, making it unforgettable. Highly recommend for anyone looking for a musical journey like no other!",
        authorName: "John Melody",
        designation: "Wedding Planner - Melodic Weddings"
    },
    {
        id: 9,
        signatureImg: testimonialSignatureImg,
        image: testimonialImgThree,
        description: "Musicaly's musicians are true artists, and their passion for music shines through every note. Our audience was mesmerized by the soulful performance. An absolute delight to work with!",
        authorName: "Sarah Rhythm",
        designation: "Concert Organizer - Rhythmic Productions"
    },
]

export default testimonial_data;