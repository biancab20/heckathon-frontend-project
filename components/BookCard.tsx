import {IBookData} from "../utils/interfaces";
import Image from "next/image";
import React from "react";

export default function BookCard({data}: { data: IBookData }) {

    const renderImage = (): React.ReactNode => {
        return (
            <>
                {data.image && (
                    <Image
                        src={data.image}
                        alt={data.title ?? 'Book cover'}
                        width={200}
                        height={200}>
                    </Image>
                )}
            </>
        )
    }
    return (
        <>
            <div className={`flex flex-start justify-center`}>
                {renderImage()}
            </div>

        </>
    )
}