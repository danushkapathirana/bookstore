type ContentProps = {
    children: React.ReactNode
}

export default function Content(props: ContentProps) {
    return(
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
            {props.children}
        </div>
    )
}
