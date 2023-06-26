import React from "react";
import styled from "styled-components";
import Modal from "@UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, useAppDispatch } from "@src/hooks";
import { changeModalState } from "@src/store";

const Header = () => {
  const { isOpen } = useAppSelector((state) => state.getSchedule.modals);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeModalState(!isOpen));
  };
  return (
    <HeaderContainer>
      <FlexContainer>
        <svg
          width="120"
          height="40"
          id="_레이어_1"
          data-name="레이어 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 112.29 29.16"
        >
          <LogoText transform="translate(0 19.97)">
            <tspan x="0" y="0">
              Kimcurly
            </tspan>
          </LogoText>
        </svg>
        <MenuContainer>
          <MenuIcon onClick={handleClick}>
            <FontAwesomeIcon icon={faEllipsis} size="xl" />
          </MenuIcon>
          {isOpen && <Modal />}
        </MenuContainer>
      </FlexContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  margin-bottom: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LogoText = styled.text`
  fill: #231815;
  font-family: BMDoHyeon-OTF-KSCpc-EUC-H, "BM Dohyeon";
  font-size: 24.97px;
`;

const MenuContainer = styled.div`
  width: auto;
  height: 100%;
  position: relative;
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #d9d9d9;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
