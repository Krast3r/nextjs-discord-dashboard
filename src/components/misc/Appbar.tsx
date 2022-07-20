import style from "../misc/index.module.scss";
import { RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { Guild } from "../../utils/types";
import { FC } from "react";

type Props = {
    guild?: Guild;
}

export const Appbar: FC<Props> = ({ guild }) => {
    const router = useRouter();
    return (
        <div className={style.appbar}>
            <div className={style.menu} onClick={() => router.push('/menu')}>
                <RiMenu3Line size={65}/>
                <p>Menu</p>
            </div>
            <div>
                <p>{guild?.name}</p>
            </div>
        </div>
    );
};