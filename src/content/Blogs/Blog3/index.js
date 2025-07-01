"use client";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
const ListCss = {
                primary: {
                  sx: {
                    fontFamily: "Inter, sans-serif",
                    color: "#000",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  },
                },
}

const HeyBuildexBlog = () => {
  return (
    <Box
      sx={{
        pb: 4,
        pt: { xs: 4, md: 6 },
        mx: "auto",
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* Blog Image */}
        <Box sx={{ mb: 3 }}>
          <Box
            src="/blog-3.jpg" // Place your image in /public
            alt="HeyBuildex Construction Blog"
            component={"img"}
            sx={{ width: "100%", height: "300px", objectFit: "contain" }}
          />
        </Box>

        {/* Blog Title */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            fontWeight: 700,
            mb: 2,
          }}
        >
          HeyBuildex: Your One-Stop Online Shop for Construction Materials and
          Equipment Rentals
        </Typography>

        {/* Intro */}
        <Typography sx={{ fontFamily: "Inter, sans-serif", color: "#000" }}>
          Are you planning a construction project and looking for a reliable
          supplier for all your building needs? Look no further than{" "}
          <strong>HeyBuildex</strong>—the newly launched online marketplace that
          brings you everything you need for construction, all in one place.
          Whether you're a contractor, builder, or homeowner, HeyBuildex is
          designed to make your construction journey smoother, more affordable,
          and hassle-free.
        </Typography>

        {/* What is HeyBuildex */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            fontWeight: 600,
            mt: 4,
          }}
        >
          What Is HeyBuildex?
        </Typography>
        <Typography sx={{ fontFamily: "Inter, sans-serif", color: "#000" }}>
          HeyBuildex is your trusted online supplier for construction materials
          and equipment rentals. Our platform offers a wide range of
          high-quality products, from steel and cement to ready-mix concrete and
          safety gear. We also provide infrastructure equipment rentals, making
          it easy for you to get everything you need for your project without
          visiting multiple stores.
        </Typography>

        {/* Why Choose */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            fontWeight: 600,
            mt: 4,
          }}
        >
          Why Choose HeyBuildex?
        </Typography>
        <List sx={{ pl: 2 }}>
          {[
            "All Construction Materials in One Place: HeyBuildex brings you a complete range of construction supplies, saving you time and effort.",
            "Top Brands at Low Prices: Get trusted brands in steel, cement, and more, all at competitive rates.",
            "Easy Online Enquiry: Check prices, compare brands, and place orders or rental requests online.",
            "Quality and Reliability: Every product meets industry standards to ensure your project’s success.",
          ].map((text, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemText
                primary={text}
                slotProps={ListCss}
              />
            </ListItem>
          ))}
        </List>

        {/* Explore Our Construction Materials */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            fontWeight: 600,
            mt: 4,
          }}
        >
          Explore Our Construction Materials
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#000", mt: 2 }}
        >
          Construction Steel
        </Typography>
        <Typography sx={{ fontFamily: "Inter, sans-serif", color: "#000" }}>
          Steel is the backbone of any construction project. At HeyBuildex, we
          supply a wide variety of steel products, including:
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText
              primary="TMT Bars: Strong and flexible, perfect for building foundations and structures."
              slotProps={ListCss}
            />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText
              slotProps={{
                primary: {
                  sx: {
                    fontFamily: "Inter, sans-serif",
                    color: "#000",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  },
                },
              }}
              primary="Binding Wires: Essential for tying TMT bars and providing structural integrity."
            />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText
               slotProps={ListCss}
              primary="Structural Steel: MS angles, plates, pipes, sheets, beams, rounds, and flats."
            />
          </ListItem>
        </List>

        <Typography sx={{ fontFamily: "Inter, sans-serif", color: "#000" }}>
          <strong>Available Brands:</strong> Vizag Steel, JSW, Tata Tiscon,
          Jindal Panther, SAIL, and secondary brands like Simhadri TMT, Kamdhenu
          TMT, Mangal TMT, Radha TMT, and more.
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#000", mt: 3 }}
        >
          Cement and Ready-Mix Concrete
        </Typography>
        <Typography sx={{ fontFamily: "Inter, sans-serif", color: "#000" }}>
          We supply cement from all leading brands. Need ready-mix concrete?
          We’ve got it! Ensure consistency and strength without the hassle of
          on-site mixing.
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#000", mt: 3 }}
        >
          Infrastructure Equipment Rentals
        </Typography>
        <Typography sx={{ fontFamily: "Inter, sans-serif", color: "#000" }}>
          Rent well-maintained, high-performance machinery:
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText  slotProps={ListCss} primary="Piling rigs" />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText  slotProps={ListCss} primary="Transit mixers" />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Concrete batching plants" />
          </ListItem>
        </List>

        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins, sans-serif", color: "#000", mt: 3 }}
        >
          Safety Gear and More
        </Typography>
        <Typography sx={{ fontFamily: "Inter, sans-serif", color: "#000" }}>
          Safety is non-negotiable. Get helmets, gloves, vests, and other
          essential gear to protect your workforce and maintain site compliance.
        </Typography>

        {/* How to Order */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            fontWeight: 600,
            mt: 5,
          }}
        >
          How to Order from HeyBuildex
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Visit our website: heybuildex.com" />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Browse products and equipment" />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Choose your brand and quantity" />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Submit an online enquiry" />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Receive a quick quote with delivery options" />
          </ListItem>
        </List>

        {/* Why HeyBuildex Again */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            fontWeight: 600,
            mt: 5,
          }}
        >
          Why HeyBuildex Is the Best Choice for Your Construction Needs
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Complete Range: From materials to machinery and safety gear." />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Trusted Brands: Only the best in the industry." />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Affordable Pricing: Save more on your project costs." />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Convenience: Shop online anytime, from anywhere." />
          </ListItem>
          <ListItem sx={{'& .MuiListItemText-root':{
            m:"0px"
          },'&.MuiListItem-root':{
            p:"5px"
          }}}>
            <ListItemText   slotProps={ListCss} primary="Expert Support: Our team is always ready to help." />
          </ListItem>
        </List>

        {/* CTA */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#000",
            fontWeight: 600,
            mt: 5,
          }}
        >
          Start Your Construction Project with HeyBuildex Today!
        </Typography>
        <Typography sx={{ fontFamily: "Inter, sans-serif", color: "#000" }}>
          Don’t let material sourcing slow down your project. Visit{" "}
          <strong>heybuildex.com</strong> and discover the easiest way to buy
          construction materials and rent equipment online. Get quality,
          variety, and unbeatable prices—all at your fingertips. Build better,
          faster, and smarter with HeyBuildex!
        </Typography>
      </Container>
    </Box>
  );
};

export default HeyBuildexBlog;
