export default function parallelLayout({children, parallel}:{
    children: React.ReactNode,
    parallel: React.ReactNode,
}){
    return(
        <div>
            <div>{parallel}</div>
            <div>{children}</div>
        </div>
    )
}