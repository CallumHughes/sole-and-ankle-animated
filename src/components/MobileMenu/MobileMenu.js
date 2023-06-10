/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { WEIGHTS } from "../../constants";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { keyframes } from "styled-components";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const motionFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(15%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const doorClose = keyframes`
  from {
    transform: rotateY(-90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

const Overlay = styled(DialogOverlay)`
  perspective: 800px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  z-index: -1;
  animation: ${fadeIn} 400ms;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  --fade-in-delay: 0ms;

  @media (prefers-reduced-motion: no-preference) {
    --fade-in-delay: 250ms;
    transform-origin: right;
    animation: ${doorClose} 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }
`;

const CloseButton = styled(UnstyledButton)`
  opacity: 0;
  animation: ${fadeIn} 400ms ease-in forwards;
  animation-delay: var(--fade-in-delay);
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  @media (prefers-reduced-motion: no-preference) {
    opacity: 0;
    animation: ${motionFadeIn} 500ms ease-in forwards;
  }

  &:first-of-type {
    color: var(--color-secondary);
  }

  --stagger-delay: 70ms;
  &:nth-of-type(1) {
    animation-delay: calc(var(--fade-in-delay) + var(--stagger-delay));
  }
  &:nth-of-type(2) {
    animation-delay: calc(var(--fade-in-delay) + var(--stagger-delay) * 1);
  }
  &:nth-of-type(3) {
    animation-delay: calc(var(--fade-in-delay) + var(--stagger-delay) * 2);
  }
  &:nth-of-type(4) {
    animation-delay: calc(var(--fade-in-delay) + var(--stagger-delay) * 3);
  }
  &:nth-of-type(5) {
    animation-delay: calc(var(--fade-in-delay) + var(--stagger-delay) * 4);
  }
  &:nth-of-type(6) {
    animation-delay: calc(var(--fade-in-delay) + var(--stagger-delay) * 5);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  opacity: 0;
  animation: ${fadeIn} 400ms ease-in forwards;
  animation-delay: var(--fade-in-delay);
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
