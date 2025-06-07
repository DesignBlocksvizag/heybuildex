  <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 100,
                  top: "84px",
                  display: { xs: "none", md: "flex" },
                  backgroundColor: "#01933e",
                  py: 1,
                  borderRadius: 1,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  gap: 1,
                  px: 2,
                }}
              >
                {navItems.map((item) => {
                  if(item.name === "STEEL") {
                    return (<><Button
                    key={item.name}
                    color="inherit"
                    
                    component={Link}
                 
                    onMouseEnter={(e) => handleMouseEnter(e, category)}
                    onMouseLeave={handleMouseLeave}
                    
                    sx={{ fontWeight: 500, fontFamily: "Poppins, sans-serif", color: "#fff" }}
                  >
                    {item.name}
                  </Button>
                    <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                display: "flex",
                backgroundColor: "#fff",
                boxShadow: 3,
                zIndex: 200,
                mt: 1,
                borderRadius: 1,
                overflow: "hidden",
              }}
              onMouseEnter={(e) => handleMouseEnter(e, null)}
              onMouseLeave={handleMouseLeave}
            >
              {Object.entries(steelCategories).map(([category, items]) => (
                <Box key={category} sx={{ px: 2, py: 1, minWidth: 200 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Poppins",
                      mb: 1,
                      color: "#029441",
                    }}
                  >
                    {category}
                  </Typography>
                  <List dense>
                    {items.map((subItem) => (
                      <ListItemButton
                        key={subItem}
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: 14,
                          color: "#333",
                          "&:hover": { color: "#029441" },
                        }}
                      >
                        {subItem}
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
                  </>);
                  }
                  return (<Button
                    key={item.name}
                    color="inherit"
                    href={item.link}
                    component={Link}
                    sx={{ fontWeight: 500, fontFamily: "Poppins, sans-serif", color: "#fff" }}
                  >
                    {item.name}
                  </Button>)
                })}

                {/* Hover Menu */}
                {Object.entries(steelCategories).map(([category, items]) => (
                  <Box
                    key={category}
                    onMouseEnter={(e) => handleMouseEnter(e, category)}
                    onMouseLeave={handleMouseLeave}
                    sx={{ position: "relative" }}
                  >
                    <Typography
                      sx={{ color: "#fff", fontWeight: 500, px: 1, cursor: "pointer", fontFamily: "Poppins" }}
                    >
                      {category}
                    </Typography>
                    <Popper
                      open={hoveredCategory === category}
                      anchorEl={anchorEl}
                      placement="bottom-start"
                      transition
                      disablePortal
                      modifiers={[{ name: "offset", options: { offset: [0, 8] } }]}
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                          <Paper elevation={3} sx={{ p: 1, mt: 1, minWidth: 200 }}>
                            <List dense>
                              {items.map((item) => (
                                <ListItemButton key={item} sx={{ fontFamily: "Poppins", fontSize: 14, color: "#333", "&:hover": { color: "#029441" } }}>
                                  {item}
                                </ListItemButton>
                              ))}
                            </List>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </Box>
                ))}
              </Box>
            </Box>