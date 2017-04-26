hifive Presentation Assistant
===============
hifive�Areveal.js�Asocket.io���g���ăv���[���e�[�V�����A�V�X�^���g���쐬���܂�.

## �C���X�g�[��
```
git clone http://tritoma.o.sysrdc.ns-sol.co.jp/gitbucket/git/hifive/hifive-presenter.git  
cd hifive-presenter  
npm install  
```

## �T�[�o�[�N��
```
cd src  
node app.js  
```

## ����m�F
* **�����**  
Google Chrome (�o�[�W�����F 57.0.2987.133(64-bit))  
Internet Explorer 11 (�o�[�W�����F 11.0.9600.18638)  
* **����菇**  
�T�[�o�[���N������  
�����^�u���J��  
`http://localhost:3000` �փA�N�Z�X����  

## ���i�@�\�ꗗ
* **PresentationController**  
�X���C�h�̃i�r�Q�[�V�����i���A�E�A��A���A�O�̃X���C�h�A���̃X���C�h�A�X���C�h�ԍ��ňړ�)  
�}�[�N�_�E���`���̕����񂩂�X���C�h�̒ǉ�  
�C���f�b�N�X����X���C�h�̍폜  
�X���C�h�̕���(HTML���e)�擾(�S�ẴX���C�h�A���݂̃X���C�h)  
HTML�����񂩂�X���C�h�̍쐬
* **PageController**  
�e���[�U�ԂŃX���C�h�̃f�[�^���Ԃ��T�[�o����ē������iWebSocket���g�p�j  

�� *�����@�\���K�v�Ȃ����PresentationController.js��P�Ƃœǂݍ���Ŏg�p�ł��܂��B*  

## ���i�̃t�H���_�\��
**hifive-presenter**  
�@�@�@������ **LICENSE**  
�@�@�@������ **package.json**  
�@�@�@������ **README.md**  
�@�@�@������ **src**  
�@�@�@���@�@�@������ **app.js**  
�@�@�@���@�@�@������ **server**�@�@�@�@�@�@�@�@�@�@�@*�T�[�o�[*  
�@�@�@���@�@�@���@�@�@������ **config.js**�@�@�@�@�@�@*DB�ݒ�E�J���E�e�X�g�p�X�ƃ|�[�g�̒�`*  
�@�@�@���@�@�@���@�@�@������ **routes.js**�@�@�@�@�@�@*API Router*  
�@�@�@���@�@�@���@�@�@������ **slide**�@�@�@�@�@�@�@�@*DB�ɃX���C�h�}���E�X�V�E�폜�EAPI*  
�@�@�@���@�@�@���@�@�@�@�@�@ ������ **slide.controller.js**  
�@�@�@���@�@�@������ **static**�@�@�@�@�@�@�@�@�@�@�@*�N���C�A���g*  
�@�@�@���@�@�@�@�@�@ ������ **client**�@�@�@�@�@�@�@�@*WebContent*  
�@�@�@���@�@�@�@�@�@ ���@�@�@������ **index.html**  �@�@*���C���y�[�W*  
�@�@�@���@�@�@�@�@�@ ���@�@�@������ **css**�@�@�@�@�@*�J�X�^��CSS*  
�@�@�@���@�@�@�@�@�@ ���@�@�@������ **js**  
�@�@�@���@�@�@�@�@�@ ���@�@�@���@�@������ **PageController.js**�@�@�@�@�@�@�@*���C���y�[�W�̃R���g���[��*  
�@�@�@���@�@�@�@�@�@ ���@�@�@���@�@������ **PresentationController.js**�@�@�@*revealjs�����b�v�����R���g���[��*  
�@�@�@���@�@�@�@�@�@ ���@�@�@������ **mdfile**�@�@�@�@�@*�}�[�N�_�E���t�@�C��*  
�@�@�@���@�@�@�@�@�@ ���@�@�@�@�@ ������ **example.md**  
�@�@�@���@�@�@�@�@�@ ������**vendor**�@�@�@�@�@�@�@�@*hifive�Ajquery�Areveal���C�u����*  
�@�@�@���@�@�@�@�@�@�@�@�@  ������ **h5**  
�@�@�@���@�@�@�@�@�@�@�@�@  ������ **jquery**  
�@�@�@���@�@�@�@�@�@�@�@�@  ������ **reveal**  
�@�@�@������ **test**  
�@�@�@�@�@�@ ������ **test.js**
