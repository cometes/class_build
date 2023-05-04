import { useRouter } from "next/router"

export default function DetailPage () {
    const router = useRouter()
    return (
        <>
            <div>안녕하세요, 게시판 동적 페이지 입니다.</div>
            <div>{router.query.id}</div>
        </>
    )
}

// export const getServerSideProps = () => {
//     // 만약 서버사이드 렌더링을 하는 페이지라면? => out 폴더 생성 불가능, 이런 경우 제외 설정 옵션을 해주어야 함. 
//     // (next.config.js에서 exportPathMap으로 현재 페이지 제외시키기)
// }