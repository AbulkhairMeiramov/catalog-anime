import { Box, Modal, styled } from "@mui/material";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const StyledBox = styled(Box)`
  width: 530px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #acacac;
  box-shadow: 24px;
  padding: 8px;
  border-radius: 8px;
  height: 340px;
`;

export const VideoPlayerModal = (props) => {
  const { modalOpened } = useSelector((state) => state.catalog);

  return (
    <Modal {...props} open={modalOpened}>
      <StyledBox>
        <ReactPlayer
          width="530px"
          height="340px"
          url="https://www.youtube.com/watch?v=z9Ug-3qhrwY&feature=youtu.be"
        />
      </StyledBox>
    </Modal>
  );
};
