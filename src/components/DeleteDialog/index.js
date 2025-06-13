import { forwardRef } from "react";
import {
  Box,
  Avatar,
  Slide,
  Typography,
  styled,
  Button,
  Dialog,
} from "@mui/material";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ButtonError = styled(Button)(
  () => `
        background: #BC2C1A;
           color: ${"red"};
           &:hover {
              background: #BC2C1A;
           }
          `
);

const AvatarError = styled(Avatar)(
  () => `
            background-color: #ff19431a;
            color: #BC2C1A;
            width: 108px;
            height: 108px;
      
            .MuiSvgIcon-root {
              font-size: 25px;
            }
      `
);

const DeleteDialog = ({
  dialogtext,
  openConfirmDelete,
  closeConfirmDelete,
  handleDeleteCompleted,
  // Icon,
}) => {
  return (
    <Dialog
      open={openConfirmDelete}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
      keepMounted
      onClose={closeConfirmDelete}
      sx={{ zIndex: 1301 }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={5}
      >
        {/* <AvatarError>
          <Icon color="#BC2C1A" />
        </AvatarError> */}

        <Typography
          align="center"
          sx={{
            py: 4,
            px: 6,
            fontFamily: "Chakra Petch",
            fontSize: { xs: "16px", sm: "18px" },
            fontWeight: "700",
            lineHeight: "30px",
            color: "#03224F",
          }}
        >
          {`Are you sure you want to permanently delete ${dialogtext} Details`}?
        </Typography>

        <Typography
          align="center"
          sx={{
            pb: 4,
            fontFamily: "Chakra Petch",
            fontWeight: "normal",
            fontSize: { xs: "15px", sm: "15px" },
            lineHeight: "22px",
            color: "#86888A",
          }}
        >
          {" Once completed, this action cannot be reverted."}
        </Typography>

        <Box>
          <Button
            variant="text"
            size="large"
            sx={{
              mx: 1,
              fontSize: "15px",
              lineHeight: "18px",
              color: "#fff",
              background: "#00B45A",
              "&:hover": {
                background: "#00B45A",
              },
            }}
            onClick={closeConfirmDelete}
          >
            {"Cancel"}
          </Button>
          <ButtonError
            onClick={handleDeleteCompleted}
            size="large"
            sx={{
              mx: 1,
              px: 3,
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "18px",
              color: "#FFFFFF",
            }}
            variant="contained"
          >
            {"Delete"}
          </ButtonError>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DeleteDialog;
