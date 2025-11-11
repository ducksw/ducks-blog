import { posts } from "./posts.js";

const all_posts = document.getElementById("all_posts");
const all_posts_category = document.getElementById("all_posts_category");

function init() {
    let ret = "";
    cant_post.innerHTML = `(${posts.length})`;

    for (const key of posts.slice(0, 5)) {
        ret += `
            <li>${key.fecha} <a href="${key.url_post}">${key.title}</a></li>
        `;
    }
    all_posts.innerHTML = ret;

    const categorias = {};

    for (const post of posts) {
        if (!post.category) continue;
        if (!categorias[post.category]) {
            categorias[post.category] = [];
        }
        categorias[post.category].push(post);
    }

    let retCat = "";
    for (const categoria in categorias) {
        retCat += `
            <li><a href="post_category.html?cat=${categoria}">${categoria}</a></li>
        `
    }

    all_posts_category.innerHTML = retCat;
}

window.onload = init;