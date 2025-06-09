import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, TextField, Grid, LinearProgress, Avatar, Card, CardContent, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
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

// backgroundColor:'#1976d2' 764ba2,

  const skills = [
    { name: 'JavaScript', level: 85, icon: <Code />, color: '#f7df1e' },
    { name: 'React.js', level: 80, icon: <Web />, color: '#61dafb' },
    { name: 'Node.js', level: 75, icon: <CloudUpload />, color: '#68a063' },
    { name: 'HTML/CSS', level: 90, icon: <Web />, color: '#e34c26' },
    { name: 'Firebase', level: 70, icon: <Storage />, color: '#47a248' },
    { name: 'Git/GitHub', level: 80, icon: <GitHub />, color: '#f05032' }
  ];

export default function PortfolioPage() {
  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#764ba2', color: 'white' }}>
          <Typography variant="h6">Rishabh S</Typography>
          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: 'center', py: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Avatar src="https://via.placeholder.com/150" sx={{ width: 150, height: 150, margin: '0 auto' }} />
          <Typography variant="h3" sx={{ mt: 3 }}>Hi, I'm Rishabh</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>Fresher Software Developer</Typography>
          <Button variant="contained">Download Resume</Button>
        </motion.div>
      </Container>

      {/* Skills Section */}
      <Container id="skills" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Typography variant="body1">{skill.name}</Typography>
              <LinearProgress variant="determinate" value={skill.level} sx={{ height: 10, borderRadius: 5 }} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About section */}

      <Box
              id="about"
              sx={{
                py: 8,
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
              }}
            >
              <Container maxWidth="lg">
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
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
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
                          <Typography variant='body1' sx={{ mb: 2, mt: 2 }}>
                            Graduated in 2024, with a BTech Degree in Electronics and communication Engineering, and a passion for full-stack development. 
                            I love solving complex problems and creating user-friendly applications.
                          </Typography>
                          <Typography variant='body1'>
                            I've worked on various projects including web applications, 
                            mobile apps, and low level hardware and IoT. I'm always eager to learn new 
                            technologies and skills.
                          </Typography>
                        </CardContent>
                      </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
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
                
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    textAlign="center" 
                    gutterBottom
                    sx={{ fontWeight: 'bold', mb: 6 }}
                  >
                    Technical Skills
                  </Typography>
                
                
                <Grid container spacing={4}>
                  {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={skill.name}>
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
                              <Box sx={{ mr: 2,}}>
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

                              />
                            </Box>
                            <Typography variant="body2" textAlign="right">
                              {skill.level}%
                            </Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>

      {/* Contact Form */}
      <Container id="contact" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>Contact Me</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth variant="outlined" margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" fullWidth variant="outlined" margin="normal" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" fullWidth variant="outlined" margin="normal" multiline rows={4} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Send Message</Button>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', py: 2, backgroundColor: '#764ba2', color: 'white' }}>
        <Typography variant="body2">© {new Date().getFullYear()} Rishabh. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}
