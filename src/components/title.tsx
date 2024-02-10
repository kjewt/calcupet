import { Link } from 'react-router-dom';
import { pageInfo } from "../static/pageInfo";
import type { PageInfoType } from "../type/types";

export const Title = () => {
    const data: PageInfoType[] = pageInfo;

    return (
        <div className="join">
            {data.map((item, index) => (
                <button key={index} className="btn join-item last:rounded-lg">
                    <h2 className="">
                        <Link to={`${item.link}`}>
                            {item.title}
                        </Link>
                    </h2>
                </button>
            ))}
            <hr />
        </div>
    );
};
