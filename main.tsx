/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "HJX",
  description: "This is my new blog.",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "An author",
  links: [
    { title: "Email", url: "mailto:1091408982@qq.com" },
    { title: "GitHub", url: "https://github.com/hjxylgogogo" },
    { title: "Twitter", url: "https://twitter.com/" },
  ]

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
