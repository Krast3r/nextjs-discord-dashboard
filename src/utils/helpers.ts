import { GetServerSidePropsContext } from "next";
import { Guild } from "./types";

export const validateCookies = (ctx: GetServerSidePropsContext) => {
    const sessionID = ctx.req.cookies['connect.sid'];
    return sessionID ? {
        Cookie: `connect.sid=${sessionID}`
    } : false;
};

export const getIcon = (guild?: Guild) => {
    const arr = [1, 2, 3, 4, 5];
    return !guild || !guild.icon
    ? `https://cdn.discordapp.com/embed/avatars/${arr[Math.floor(Math.random() * arr.length)]}.png`
    : `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
}