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
**hifive-presenter**  
|-- LICENSE  
|-- README.md  
|-- package.json  
`-- **src**  
�@�@�@|-- **server**�@*�T�[�o�[*  
�@�@�@|�@�@�@|-- **slide**�@*DB�ɃX���C�h�}���E�X�V�E�폜�EAPI*  
�@�@�@|�@�@�@|�@�@�@|-- slide.controller.js  
�@�@�@|�@�@�@|-- config.js  
�@�@�@|�@�@�@`-- routes.js  
�@�@�@|-- **static**�@*�N���C�A���g*  
�@�@�@|�@�@�@|-- **client**�@�@�@���@*WebContent*  
�@�@�@|�@�@�@|�@�@�@|-- **css**�@���@*�J�X�^��CSS*  
�@�@�@|�@�@�@|�@�@�@|-- **js**  
�@�@�@|�@�@�@|�@�@�@|�@�@|-- PageController.js�@�@�@�@�@�@�@���@*���C���y�[�W�̃R���g���[��*  
�@�@�@|�@�@�@|�@�@�@|�@�@`-- PresentationController.js�@�@���@*revealjs�����b�v�����R���g���[��*  
�@�@�@|�@�@�@|�@�@�@|-- **mdfile**�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@ ���@*�}�[�N�_�E���t�@�C��*  
�@�@�@|�@�@�@|�@�@�@|�@�@`-- example.md  
�@�@�@|�@�@�@|�@�@�@`-- index.html�@�@�@�@�@�@�@�@�@�@�@�@�@�@���@*���C���y�[�W*  
�@�@�@|�@�@�@`-- **vendor**�@�@���@*hifive�Ajquery�Areveal���C�u����*  
�@�@�@|�@�@�@�@�@�@|-- **h5**  
�@�@�@|�@�@�@�@�@�@|-- **jquery**  
�@�@�@|�@�@�@�@�@�@`-- **reveal**  
�@�@�@`-- app.js  