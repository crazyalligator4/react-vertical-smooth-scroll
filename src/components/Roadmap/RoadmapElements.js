import styled from 'styled-components';

export const RoadmapContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`
export const RoadmapWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0 20px;
  }
`
export const RoadmapCard = styled.div`
  background: #555c66;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const RoadmapIcon = styled.img`
  height: 116px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
export const RoadmapH1 = styled.h1`
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
export const RoadmapSubtitle = styled.p`
  font-size: 1.25rem;
  color: #000000;
  text-align: center;
`
export const RoadmapH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;
`
export const RoadmapP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`
export const RoadmapUl = styled.ul`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`
// export const RoadmapLi = styled.li`
//   font-size: 1rem;
//   text-align: center;
//   color: #fff;
// `