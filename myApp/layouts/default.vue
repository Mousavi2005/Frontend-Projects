<template>
<div>
        <div>
        <ul>
            <li>

                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>

                <NuxtLink to="">Articles</NuxtLink>
            </li>
            <li>

                <NuxtLink to="/auth/register">Register</NuxtLink>
            </li>
            <li>

                <NuxtLink to="/blog/Contact">Contact</NuxtLink>
            </li>
            <li>

                <NuxtLink to="/blog/About">About</NuxtLink>
            </li>
        </ul>
    </div>

    <br>
    <br>

    <div>
        <slot></slot>
    </div>

    <br>

    <div>
        <h2>This is the footer</h2>
    </div>
</div>
</template>
