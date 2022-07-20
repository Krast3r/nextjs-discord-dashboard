import Image from "next/image";
import { FC } from "react";
import { Guild } from "../../utils/types";
import style from "./index.module.scss";

type Props = {
    guild: Guild;
};

export const GuildMenuItem: FC<Props> = ({ guild }) => {
    return (
        <div className={style.container}>
            <Image
                src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` ??
                    "https://cdn.discordapp.com/embed/avatars/0.png"
                }
                width={55}
                height={55}
                className={style.image}
                alt={guild.name}
            />
            <p>{guild.name}</p>
        </div>
    )
}