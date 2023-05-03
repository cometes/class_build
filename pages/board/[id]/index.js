import { useRouter } from "next/router"

export default function DetailPage () {
    const router = useRouter()
    return (
        <>
            <div>안녕하세요, 게시판 정적 페이지 입니다.</div>
            <div>{router.query.id}</div>
        </>
    )
}