/**
 * @typedef {{ id: string, title: string, points?: string[], bullets?: string[] }} WorkSubpage
 * @typedef {{
 *   id: string,
 *   title: string,
 *   desc?: string,
 *   descPoints?: string[],
 *   subpages?: WorkSubpage[],
 * }} WorkStudyPage
 * @typedef {{ pages: WorkStudyPage[] }} WorkCaseStudy
 * @typedef {{
 *   id: number, slug: string, label: string, url: string, image: string, desc: string,
 *   color: string, accentColor: string, borderColor: string, role: string, year: string, stack: string[],
 *   caseStudy: WorkCaseStudy,
 * }} WorkProject
 */

/** @type {WorkProject[]} */
export const WORK_PROJECTS = [
  {
    id: 1,
    slug: "social-media",
    label: "Social Media",
    url: "https://social-anas.vercel.app/",
    image:
      "https://res.cloudinary.com/datcr1zua/image/upload/v1777802569/screencapture-social-anas-vercel-app-profile-673a3277a42f1c300d399772-2026-05-03-15_01_25_2_y3unem.png",
    desc: "MERN social app — auth, feed, posts, profiles.",
    color: "from-blue-600 via-purple-600 to-pink-600",
    accentColor: "text-blue-300",
    borderColor: "border-blue-500/30",
    role: "Full-stack · MERN",
    year: "2024–2025",
    stack: ["React", "Node", "Express", "MongoDB", "JWT", "Cloudinary"],
    caseStudy: {
      pages: [
        {
          id: "auth",
          title: "Auth",
          desc: "On this page, users can sign in using their email, and the system ensures that the provided credentials are correct.",
          descPoints: ["Sign-in / sign-up flows", "JWT-backed session"],
          subpages: [
            { id: "a1", title: "Register", points: ["Email", "Password","Full name", "username"  ] },
            { id: "a2", title: "Login", points: ["Email", "Password"] },
          ],
        },
        {
          id: "homepage",
          title: "Homepage",  
          desc: "on this page user can see the posts of the people they follow, and the posts of the people they follow's friends, and the posts of the people they follow's friends' friends and they can upload their own posts and images and they can follow and unfollow people and they can see the posts of the people they follow and the posts of the people they follow's friends and the posts of the people they follow's friends' friends and they can like and comment on the posts and they can share the posts and they can see the profile of the people they follow and the profile of the people they follow's friends and the profile of the people they follow's friends' friends.",
          descPoints: ["Scrollable stream", "creating posts and images" , "Follow relationships" , "Engagement on each post" , "View Profile" , "View Posts" , "View Likes" , "View Shares" , "View Comments" , "View Follows" , "View Followers"],
          subpages: [ 
            { id: "createPost", title: "Create Post", points: ["Post UI", "Likes / comments"] },
            { id: "followMutualFriends", title: "Follow Mutual Friends", points: ["Follow / Unfollow"] },
            { id: "viewPost", title: "View Post", points: ["View Post", "Comments", "Likes", "Shares"] },
            { id: "sideBar", title: "Side Bar", points: ["Profile", "Logout", "Settings", "Search"] },
          ],
        },
        {
          id: "profile",
          title: "Profile",
          desc: "on this page user can see their profile, and the posts they have created, and the posts they have liked, and the posts they have shared, and the posts they have commented on, and the posts they have followed, and the posts they have been followed by.",
          descPoints: ["Profile", "Posts", "Likes", "Shares", "Comments", "Follows", "Followers" , "Edit Profile" , "Change Password" , "Delete Account" , "Upload Profile Picture" , "Upload Cover Picture"],
          subpages: [
            { id: "profile", title: "Profile", points: ["Profile", "Posts", "Likes", "Shares", "Comments", "Follows", "Followers"] },
            { id: "posts", title: "Posts", points: ["Posts", "Likes", "Shares", "Comments"] },
            { id: "likes", title: "Likes", points: ["Likes", "Shares", "Comments"] },
            { id: "shares", title: "Shares", points: ["Shares", "Comments"] },
            { id: "comments", title: "Comments", points: ["Comments"] },
            { id: "follows", title: "Follows", points: ["Follows"] },
            { id: "followers", title: "Followers", points: ["Followers"] },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    slug: "urban-buy",
    label: "Urban Buy",
    url: "https://urban-ecommerce-bay.vercel.app/",
    image:
      "https://res.cloudinary.com/datcr1zua/image/upload/v1777802364/screencapture-urban-ecommerce-bay-vercel-app-2026-05-03-14_57_05_ffaeli.png",
    desc: "A sleek urban buy website designed for easy exploration, booking, and discovering new destinations.",
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    accentColor: "text-emerald-300",
    borderColor: "border-emerald-500/30",
    role: "Frontend · Next.js",
    year: "2025",
    stack: ["Next.js", "React", "Tailwind", "SSR"],
    caseStudy: {
      pages: [
        {
          id: "homepage",
          title: "Homepage",
          desc: "on this page you can check featured products, new products, best selling products, and the categories of the products.",
          descPoints: ["Featured products", "New products", "Best selling products", "Categories"],
        },
        {
          id: "shop",
          title: "Shop",
          desc: "on this page you can browse and filter products by categories, and you can sort the products by price, and you can add the products to your cart and you can checkout and you can pay for the products.",
          descPoints: ["Categories", "Sorting", "Filtering", "Adding to cart", "Checkout", "Payment"],
        },
        {
          id: "product",
          title: "Product",
          desc: "on this page you can see the details of the product, and you can add the product to your cart and you can checkout and you can pay for the product.",
          descPoints: ["Product details", "Add to cart", "customizable options"],
        },
        {
          id: "Cart",
          title: "Cart",
          desc: "on this page you can see the items in your cart, and you can remove the items from your cart and you can checkout and you can pay for the items in your cart.",
          descPoints: ["Items in cart", "Removing items", "Checkout", "Payment"],
          subpages: [
            { id: "MiniCart", title: "Mini Cart", points: ["Items in cart", "Removing items", "Checkout", "Payment"] },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    slug: "guide-protection",
    label: "Guide Protection",
    url: "https://www.guideprotection.com/",
    image:
      "https://res.cloudinary.com/datcr1zua/image/upload/v1777804121/screencapture-guideprotection-2026-05-03-15_24_25_bsckkx.png",
    desc: "a website for a company that provides protection to customers by providing a layer of protection between the customer and the product. This company is for merchants/store they can install it and it will protect their customers from the products they sell and it will also protect the merchants from the customers.",
    color: "from-orange-600 via-amber-600 to-yellow-600",
    accentColor: "text-orange-300",
    borderColor: "border-orange-500/30",
    role: "Shopify dev",
    year: "2024–2025",
    stack: ["Shopify", "Liquid", "Theme", "Apps"],
    caseStudy: {
      pages: [
        {
          id: "Shopify app",
          title: "Shopify app",
          desc: "this app provides protection to customers by providing a layer of protection between the customer and the product. This app is for merchants/store they can install it and it will protect their customers from the products they sell and it will also protect the merchants from the customers.",
          descPoints: ["Protection", "Customer", "Product" , "Merchant" , "Store"],
        },
        {
          id: "Guide app",
          title: "Guide app",
          desc: "we used to work on the app interface for the merchant/store to manage their products and orders and customers and etc.",
          descPoints: ["Products", "Orders", "Customers" , "Settings" , "Insights" , "Reports"],
        },
        {
          id: "Guide Admin",
          title: "Guide Admin",
          desc: "this website is for the app owner where they can manage their app and their store and their customers and etc.",
          descPoints: ["App", "Store", "Customers" , "Settings" , "Insights" , "Reports"],
        },
        {
          id: "Guide Claim portal",
          title: "Guide Claim portal",
          desc: "this website is for the customers where they can claim their products and they can see the status of their claim and they can see the details of their claim and they can see the documents of their claim and they can see the progress of their claim and they can see the result of their claim.",
          descPoints: ["Claim", "Status", "Details", "Documents", "Progress", "Result"],
        },
      ],
    },
  },
];

export function getWorkProjectBySlug(slug) {
  return WORK_PROJECTS.find((p) => p.slug === slug) ?? null;
}

export function getAllWorkSlugs() {
  return WORK_PROJECTS.map((p) => p.slug);
}
