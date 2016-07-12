#include "ofMain.h"

ofShader Tron;

class ofApp : public ofBaseApp{
    
public:
    void setup();
    void draw();
    
    ofSoundPlayer concept;
    
};

void ofApp::setup(){
    
    ofHideCursor();
    concept.load("Changning.mp3");
    concept.play();
    concept.setLoop(true);
}

void ofApp::draw(){
    
    Tron.load("","Tron.frag");
    
    Tron.begin();
    Tron.setUniform1f("u_time", ofGetElapsedTimef());
    Tron.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    ofDrawRectangle(0,0,ofGetWidth(), ofGetHeight());
    Tron.end();
}































int main( ){
    ofSetupOpenGL(1024,768,OF_FULLSCREEN);
    ofRunApp(new ofApp());
    
}