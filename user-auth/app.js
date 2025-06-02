const express = require('express');
const getAccessToken = require('./googleAuth');
const axios = require('axios');

const DB_BASEURL = 'https://firestore.googleapis.com/v1/projects/ user-cred-a841c /databases/(default)/documents'

