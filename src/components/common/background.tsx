import { ReactNode } from "react";

type BackgroundCoverProps = {
    children: ReactNode;
};

export const Background = (props: BackgroundCoverProps) => {
    const { children } = props;

    return (
        <div className="m-10 mt-2">
            <div className="border-2 border-secondary h-screen p-8">{children}</div>
        </div>
    )
};
