import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { GuildMenuItem } from "../../components/servers/GuildMenuItem";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";
import style from "../menu/index.module.scss";

type Props = {
    guilds: Guild[];
};

const MenuPage: NextPage<Props> = ({ guilds }) => {
    const router = useRouter();
    return (
        <div className="page">
            <div className={style.container}>
                <h1 className={style.title}>Please, select a Guild</h1>
                {guilds.map((guild) => (
                    <div key={guild?.id} onClick={() => router.push(`/dashboard/${guild?.id}`)}>
                        <GuildMenuItem guild={guild}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return fetchMutualGuilds(ctx);
}

export default MenuPage;