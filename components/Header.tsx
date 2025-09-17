

export default function Header() {
    return (
        <header
            className={`text-black w-full h-16 mx-0 px-0 z-20 bg-teal-500`}
        >
            <nav>
                <div className={`container mx-auto px-2 sm:px-4 xl:px-8`}>
                    <div className={`relative flex items-stretch justify-end h-16 w-full gap-x-4`}>
                        <div className={`flex justify-between xl:items-center xl:justify-between`}>
                            <div className={`flex text-xl`}>
                                <div className={`flex flex-row items-center mx-4`}>
                                    <a
                                        href={`/`}
                                        className={`flex items-center flex-row text-center text-black hover:text-white`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Reading now
                                    </a>
                                </div>
                                <div className={`flex flex-row items-center mx-4`}>
                                    <a
                                        href={`/`}
                                        className={`flex items-center flex-row text-center text-black hover:text-white`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Suggested books
                                    </a>
                                </div>
                                <div className={`flex flex-row items-center mx-4`}>
                                    <a
                                        href={`/`}
                                        className={`flex items-center flex-row text-center text-black hover:text-white`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Already read
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}