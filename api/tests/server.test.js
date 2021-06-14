"use strict";
/* eslint-env mocha */

const request = require("supertest");
const chai = require("chai")  
const server = require("../src/server.js");
const expect = chai.expect


describe("posts router",  function () {
   describe("POST/posts/list", function () {
   
    it("send data post/list", function(done) {
        request('https://devmania.shop')
        .post('/posts/list/')
        .send({'idUser':'yhau1989@gmail.com' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) done(err);
            done();
          });
    });

    it("no send data post/list", function(done) {
        request(server)
       .post('/posts/list/')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(400)
       .end(function(err, res) {
           if (err) done(err);
           done();
         });
   });

  });
});
