import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";
import blogImg from "../../assets/images/마이블로그메인.png";
import blogImg2 from "../../assets/images/마이블로그태그.png";
import jeogiImg from "../../assets/images/저기어때.png";
import jeogiImg2 from "../../assets/images/저기어때2.png";
import jeogiImg3 from "../../assets/images/저기어때3.png";
import nwitImg from "../../assets/images/느위터1.png";
import nwitImg2 from "../../assets/images/느위터2.png";
import nwitImg3 from "../../assets/images/느위터3.png";
import nwitImg4 from "../../assets/images/느위터4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectBlock = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    position: relative;

    .project__menu {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5em;

        @media all and (max-width: 768px) {
            grid-template-columns: repeat(1, 0.8fr);
            justify-content: center;
        }
    }
`;

export const ProjectForm = () => {
    const [show, setShow] = useState(false);
    const [project, setProject] = useState({});

    const onClick = useCallback((e) => {
        const title = e.target.dataset.title;
        if (!title) {
            return;
        }
        title === "Nwitter" &&
            setProject({
                img: [nwitImg, nwitImg2, nwitImg3, nwitImg4],
                stack: "React, Redux, Redux-Saga, Firebase",
                desc: [
                    "리액트와 파이어베이스로 구성된 트위터 클론, 느위터입니다.",
                    "리덕스와 리덕스 사가를 이용해 상태 관리를 하였고",
                    "사가를 이용한 비동기 처리에 대한 이해도 및",
                    "파이어베이스에 대한 이해도를 높일 수 있었습니다.",
                    "트윗등록/좋아요/댓글/이미지업로드가 구현되어있습니다.",
                ],
                pageLink: "https://nwitterclone.netlify.app/",
                gitLink: "https://www.github.com/chkim116/nwitter",
            });
        title === "My Blog" &&
            setProject({
                img: [blogImg, blogImg2],
                stack: "React, NodeJS",
                desc: [
                    "리액트와 노드JS를 활용해 만든 블로그로써 실제로 운영 중인 블로그입니다.",
                    "DB의 설계부터 프론트와 백, 배포에 이르기까지 모든 단계를 도맡아 함으로써",
                    "프론트-백엔드 전반에 걸쳐 깊게 생각할 수 있었습니다.",
                    "협업의 중요성 및 아키텍처의 필요성",
                    "더 나아가 리덕스 사가와 같은 상태 관리의 필요성이 와닿았던 프로젝트였습니다.",
                    "Jwt 토큰을 활용한 로그인 인증 및 리액트 훅과 리덕스를 이용한",
                    "게시물의 등록, 수정, 삭제 등 다양한 기능을 구현했고",
                    "React-quill 텍스트 에디터, 게시글 Pagination을 구현했습니다.",
                    "또한 조회수 기록과 검색 기능, 게시글마다의 카테고리를 갖췄습니다.",
                ],
                pageLink: "https://www.kormelon.cf",
                gitLink: "https://www.github.com/chkim116/myblog",
            });
        title === "저기어때" &&
            setProject({
                img: [jeogiImg, jeogiImg2, jeogiImg3],
                stack: "Html, Css, Javascript",
                desc: [
                    "HTML, CSS, Vanila JS를 활용한 여기어때 클론코딩입니다.",
                    "바닐라 자바스크립트를 활용해 이미지 슬라이더를 구현했습니다.",
                    "실제로 여기어때 검색이 가능합니다.",
                ],
                pageLink: "https://chkim116.github.io/jeogi/",
                gitLink: "https://github.com/chkim116/jeogi",
            });

        setShow(true);
    }, []);

    const onClose = useCallback(() => {
        setShow(false);
    }, []);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [show]);

    return (
        <>
            <ProjectBlock>
                <h1 className="portfoilo__title Project">My Project</h1>
                <div className="project__menu">
                    <ProjectGrid show={show} onClick={onClick} />
                </div>
            </ProjectBlock>
            <ProjectModal show={show} onClick={onClose} project={project} />
        </>
    );
};
