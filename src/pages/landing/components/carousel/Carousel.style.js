import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 100px;

  @media (max-width: ${({ mobileBreakpoint }) => mobileBreakpoint}px) {
    top: 30px;
  }
`;

export const RailWrapper = styled.div`
  overflow: hidden;
  margin: ${({ showDots }) => (showDots ? '0 20px 15px 20px' : 'auto')};

  @media (max-width: ${({ mobileBreakpoint }) => mobileBreakpoint}px) {
    overflow-x: auto;
    margin: 0;
    scroll-snap-type: ${({ scrollSnap }) => (scrollSnap ? 'x mandatory' : '')};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Rail = styled.div`
  display: grid;
  grid-column-gap: ${({ gap }) => `${gap}`};
  position: relative;
  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  grid-template-columns: ${({ page }) => `repeat(${page}, 100%)`};
  transform: ${({ currentPage, gap }) =>
    `translateX(calc(${-100 * currentPage}% - ${gap * currentPage}px))`};

  @media (max-width: ${({ mobileBreakpoint }) => mobileBreakpoint}px) {
    padding-left: ${({ gap }) => `${gap}px`};
    grid-template-columns: ${({ page }) => `repeat(${page}, 90%)`};
    grid-column-gap: ${({ cols, rows, gap }) =>
      `calc(${(cols * rows - 1) * 90}% + ${cols * rows * gap}px)`};
    transform: translateX(0);
  }
`;

export const Item = styled.div`
  scroll-snap-align: ${({ scrollSnap }) => (scrollSnap ? 'center' : '')};
  margin: auto;
`;

export const ItemSet = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-gap: ${({ gap }) => `${gap}px`};

  @media (max-width: ${({ mobileBreakpoint }) => mobileBreakpoint}px) {
    grid-template-columns: ${({ cols, rows }) =>
      `repeat(${cols * rows}, 100%)`};
    grid-template-rows: 1fr;
    &:last-of-type > ${Item}:last-of-type {
      padding-right: ${({ gap }) => `${gap}px`};
      margin-right: ${({ gap }) => `-${gap}px`};
    }
  }
`;

export const Dots = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -12px;
  height: 10px;
  width: 100%;
  line-height: 10px;
  text-align: center;

  @media (max-width: ${({ mobileBreakpoint }) => mobileBreakpoint}px) {
    display: none;
  }
`;
