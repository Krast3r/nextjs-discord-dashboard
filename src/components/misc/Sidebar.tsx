import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { RiLogoutCircleLine } from 'react-icons/ri';
import style from "./index.module.css";
import { useRouter } from "next/router";
import { Guild } from "../../utils/types";
import { FC } from "react";
import { getIcon } from "../../utils/helpers";

const routes =
    [
        {
            name: 'dashboard',
            icon: <MdSpaceDashboard size={48} />,
            getPath: (id: string) => `/dashboard/${id}`
        },
        {
            name: 'commands',
            icon: <BsTerminal size={48} />,
            getPath: (id: string) => `/dashboard/${id}/commands`
        },
        {
            name: 'settings',
            icon: <FaWrench size={48} />,
            getPath: (id: string) => `/dashboard/${id}/settings`
        }
    ];

type Props = {
    guild?: Guild;
}

export const Sidebar: FC<Props> = ({ guild }) => {
    const router = useRouter();
    return (
        <div className={style.sidebar}>
            <Image
                className={style.avatar}
                src={getIcon(guild)}
                height={48}
                width={48}
                alt={guild?.name}
            />
            <div className={style.icons}>
                {routes.map((route) => (
                    <div
                        key={route.name}
                        onClick={() =>
                            router.push(route.getPath(router.query?.id!.toString()))
                        }
                    >{route.icon}</div>
                ))}
            </div>
            <div>
                <RiLogoutCircleLine size={48} />
            </div>
        </div>
    )
};