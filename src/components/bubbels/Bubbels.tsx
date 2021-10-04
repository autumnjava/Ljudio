import {
  StyledWrapper,
  StyledHead,
  StyledAvatar1,
  StyledInner1,
  StyledName1,
  StyledAvatar2,
  StyledInner2,
  StyledAvatar3,
  StyledInner3,
  StyledAvatar4,
  StyledInner4,
} from "./StyledBubbels";

interface VisitorProps {
  username: string,
  _id: string
}

const Bubbels = ({ data }: any) => {

  const getBubbles = () => {
    return data.visitors.map((visitor: VisitorProps, index: number) => {
      if (index == data.visitors.length - 1) {
        return (
          <StyledAvatar1>
              <StyledInner1>
                <StyledName1 key={index + 'a'}>
                  {visitor.username}
                </StyledName1>
              </StyledInner1>
            </StyledAvatar1>
          )
      }

      if (index == data.visitors.length - 2) {
        return (
          <StyledAvatar2>
            <StyledInner2>
              <StyledName1 key={index + 'b'}>
                {visitor.username}
              </StyledName1>
            </StyledInner2>
          </StyledAvatar2>
        )
      }

      if (index == data.visitors.length - 3) {
        return (
          <StyledAvatar3>
            <StyledInner3>
              <StyledName1 key={index + 'c'}>
                {visitor.username}
              </StyledName1>
            </StyledInner3>
          </StyledAvatar3>
        )
      }

      if (index == data.visitors.length - 4) {
        return (
          <StyledAvatar4>
            <StyledInner4>
              <StyledName1 key={index + 'd'}>
               {visitor.username}
              </StyledName1>
            </StyledInner4>
          </StyledAvatar4>
        )
      }
    })
  }
 
  return (
  <StyledWrapper>
    <StyledHead>
        <StyledName1>DJ {data.dj.username}</StyledName1>
      </StyledHead>
      {data.visitors.length > 0 && getBubbles()}
  </StyledWrapper>
  )
}

export default Bubbels;