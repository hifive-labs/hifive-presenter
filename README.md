Hifive Presentation Assistant
===============
Hifive�AReveal.js�ASocket.io���g���ăv���[���e�[�V�����A�V�X�^���g���쐬���܂�.

## �C���X�g�[��
git clone http://tritoma.o.sysrdc.ns-sol.co.jp/gitbucket/git/hifive/hifive-presenter.git  
cd hifive-presenter  
npm install  

## �T�[�o�[�N��
cd src  
node app.js  

## ����m�F
�����^�u���J���āAhttp://localhost:3000 �փA�N�Z�X����  

## ���i�@�\�ꗗ
�X���C�h�̃i�r�Q�[�V�����i���A�E�A��A��)  
�X���C�h�̒ǉ��E�폜  
�X���C�h�̕���(HTML���e)�擾  
�e���[�U�[�̊ԁA�X���C�h�̃f�[�^���Ԃ�񓯊��E������  

## ���i�̃t�H���_�\��
 - __LICENSE__
 - __README.md__
 - __package.json__
 - __src/__
  - __server/__�@�@*�T�[�o�[*_ 
   - __slide/__�@�@*DB�ɃX���C�h�}���E�X�V�E�폜�EAPI*
    - __slide.controller.js__
   - __config.js__
   - __routes.js__
  - __static/__�@�@*�N���C�A���g*
   - __client/__�@�@*WebContent* 
    - __css/__�@�@�@*�J�X�^��CSS* 
    - __js/__
     - __PageController.js__�@�@*���C���y�[�W�̃R���g���[��*
     - __PresentationController.js__�@�@*revealjs�����b�v�����R���g���[��*  
    - __mdfile/__�@�@*�}�[�N�_�E���t�@�C��*
     - __example.md__
    - __index.html__�@�@*���C���y�[�W*
   - __vendor/__�@�@*hifive�Ajquery�Areveal���C�u����*
    - __h5/__
    - __jquery/__
    - __reveal/__
  - __app.js__
