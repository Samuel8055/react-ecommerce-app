import styled from "styled-components";

export const DisplayStyle = styled.div`
  .category {
    // background-color: #f9f9f9;
    background-color: ${(props) =>
      props.collection ? "var(--mainWhite)" : "#f9f9f9"};
    cursor: pointer;
    position: relative;
    padding: 5px;
  }

  .category:hover .category-title {
    opacity: 1;
  }

  .category-title {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 0.5s ease;
  }

  .category-title h3 {
    color: #fff;
    padding: 5px 10px;
    text-transform: capitalize;
    font-size: 20px;
    letter-spacing: 0.05rem;
  }
`;
