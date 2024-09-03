type PropsType = {
    children: React.ReactNode
}

export default function Error(props: PropsType) {
    return(
        <div className="flex justify-center font-semibold italic">
            {props.children}
        </div>
    )
}
