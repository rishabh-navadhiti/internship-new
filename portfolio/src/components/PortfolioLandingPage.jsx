import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  LinearProgress,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom
} from '@mui/material';
import {
  Menu as MenuIcon,
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Code,
  Web,
  Storage,
  CloudUpload
} from '@mui/icons-material';

const PortfolioLandingPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
    { name: 'JavaScript', level: 85, icon: <Code />, color: '#f7df1e' },
    { name: 'React.js', level: 80, icon: <Web />, color: '#61dafb' },
    { name: 'Node.js', level: 75, icon: <CloudUpload />, color: '#68a063' },
    { name: 'HTML/CSS', level: 90, icon: <Web />, color: '#e34c26' },
    { name: 'Firebase', level: 70, icon: <Storage />, color: '#47a248' },
    { name: 'Git/GitHub', level: 80, icon: <GitHub />, color: '#f05032' }
  ];

  const navItems = ['Home', 'About', 'Skills', 'Contact'];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ['home', 'about', 'skills', 'contact'];
  //     const scrollPosition = window.scrollY + 100;

  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const offsetTop = element.offsetTop;
  //         const height = element.offsetHeight;
          
  //         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
  //           setActiveSection(section);
  //         }
  //       }
  //     }

  //     // Check if skills section is visible
  //     const skillsElement = document.getElementById('skills');
  //     if (skillsElement) {
  //       const rect = skillsElement.getBoundingClientRect();
  //       if (rect.top < window.innerHeight && rect.bottom > 0) {
          
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item} 
            onClick={() => scrollToSection(item)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                transform: 'translateX(8px)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation */}
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor:'#1976d2',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #fff, #e3f2fd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            John Developer
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ '&:hover': { transform: 'rotate(90deg)', transition: 'all 0.3s ease' } }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  onClick={() => scrollToSection(item)}
                  sx={{
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(255,255,255,0.3)'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: activeSection === item.toLowerCase() ? '100%' : '0%',
                      height: '2px',
                      background: '#fff',
                      transform: 'translateX(-50%)',
                      transition: 'width 0.3s ease'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography 
                    variant="h2" 
                    component="h1" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 'bold',
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    Hi, I'm John
                  </Typography>
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      color: '#e3f2fd',
                      fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                  >
                    Fresher Software Developer
                  </Typography>
                  <Typography 
                    variant="h6" 
                    paragraph
                    sx={{ 
                      opacity: 0.9,
                      lineHeight: 1.6,
                      maxWidth: '500px'
                    }}
                  >
                    Passionate about creating innovative solutions and learning new technologies. 
                    Ready to contribute to your team with fresh ideas and dedication.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => scrollToSection('contact')}
                      sx={{
                        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 25px rgba(255,107,107,0.4)'
                        },
                        transition: 'all 0.3s ease',
                        borderRadius: '25px',
                        px: 4
                      }}
                    >
                      Get In Touch
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        borderRadius: '25px',
                        px: 4,
                        '&:hover': {
                          borderColor: '#4ECDC4',
                          backgroundColor: 'rgba(78, 205, 196, 0.1)',
                          transform: 'translateY(-3px)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      View Resume
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="left" in timeout={1200}>
                <Box
                  sx={{
                    width: { xs: 250, md: 400 },
                    height: { xs: 250, md: 400 },
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    '&:hover': {
                      transform: 'scale(1.05) rotate(5deg)',
                      transition: 'all 0.5s ease'
                    }
                  }}
                >
                  <Typography variant="h1" sx={{ fontSize: '4rem', opacity: 0.3 }}>
                    👨‍💻
                  </Typography>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Typography 
              variant="h3" 
              component="h2" 
              textAlign="center" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                color: '#333',
                mb: 6
              }}
            >
              About Me
            </Typography>
          </Fade>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Zoom in timeout={1000}>
                <Card 
                  elevation={10}
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      My Journey
                    </Typography>
                    <Typography paragraph>
                      Recent Computer Science graduate with a passion for full-stack development. 
                      I love solving complex problems and creating user-friendly applications.
                    </Typography>
                    <Typography paragraph>
                      During my studies, I've worked on various projects including web applications, 
                      mobile apps, and database management systems. I'm always eager to learn new 
                      technologies and best practices.
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Zoom in timeout={1200}>
                <Card 
                  elevation={10}
                  sx={{
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
                      Contact Information
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Email sx={{ mr: 2, color: '#1976d2' }} />
                      <Typography>john.developer@email.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Phone sx={{ mr: 2, color: '#1976d2' }} />
                      <Typography>+1 (555) 123-4567</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOn sx={{ mr: 2, color: '#1976d2' }} />
                      <Typography>New York, NY</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                      <IconButton 
                        sx={{ 
                          background: 'linear-gradient(45deg, #333, #666)',
                          color: 'white',
                          '&:hover': { transform: 'scale(1.2)' }
                        }}
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton 
                        sx={{ 
                          background: 'linear-gradient(45deg, #0077b5, #00a0dc)',
                          color: 'white',
                          '&:hover': { transform: 'scale(1.2)' }
                        }}
                      >
                        <LinkedIn />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box
        id="skills"
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Typography 
              variant="h3" 
              component="h2" 
              textAlign="center" 
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 6 }}
            >
              Technical Skills
            </Typography>
          </Fade>
          
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={skill.name}>
                <Zoom in timeout={1000 + index * 200}>
                  <Card 
                    elevation={10}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      '&:hover': {
                        transform: 'translateY(-10px) scale(1.02)',
                        background: 'rgba(255, 255, 255, 0.15)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ color: skill.color, mr: 2 }}>
                          {skill.icon}
                        </Box>
                        <Typography variant="h6" fontWeight="bold">
                          {skill.name}
                        </Typography>
                      </Box>
                      <Box sx={{ width: '100%', mb: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            background: 'rgba(255, 255, 255, 0.2)',
                            '& .MuiLinearProgress-bar': {
                              background: `linear-gradient(45deg, ${skill.color}, #fff)`,
                              borderRadius: 4,
                              transition: 'transform 1.5s ease-in-out'
                            }
                          }}
                        />
                      </Box>
                      <Typography variant="body2" textAlign="right">
                        {skill.level}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        }}
      >
        <Container maxWidth="md">
          <Fade in timeout={1000}>
            <Typography 
              variant="h3" 
              component="h2" 
              textAlign="center" 
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'white', mb: 6 }}
            >
              Get In Touch
            </Typography>
          </Fade>
          
          <Zoom in timeout={1200}>
            <Card 
              elevation={20}
              sx={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        // onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '&:hover fieldset': {
                              borderColor: '#f5576c'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#f093fb'
                            }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        // onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '&:hover fieldset': {
                              borderColor: '#f5576c'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#f093fb'
                            }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        // onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '&:hover fieldset': {
                              borderColor: '#f5576c'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#f093fb'
                            }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
                          borderRadius: '25px',
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: '0 10px 30px rgba(245, 87, 108, 0.4)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Zoom>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          py: 3,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}
      >
        <Typography variant="body1">
          © 2025 John Developer. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioLandingPage;