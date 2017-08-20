﻿

(function () {
    var ImageUploader;

    ImageUploader = (function () {
        ImageUploader.imagePath = 'http://localhost:1066/Content/assets/ContentTools/files/author-pic.jpg';

        ImageUploader.imageSize = [120, 120];

        function ImageUploader(dialog) {
            this._dialog = dialog;
            this._dialog.addEventListener('cancel', (function (_this) {
                return function () {
                    return _this._onCancel();
                };
            })(this));
            this._dialog.addEventListener('imageuploader.cancelupload', (function (_this) {
                return function () {
                    return _this._onCancelUpload();
                };
            })(this));
            this._dialog.addEventListener('imageuploader.clear', (function (_this) {
                return function () {
                    return _this._onClear();
                };
            })(this));
            this._dialog.addEventListener('imageuploader.fileready', (function (_this) {
                return function (ev) {
                    return _this._onFileReady(ev.detail().file);
                };
            })(this));
            this._dialog.addEventListener('imageuploader.mount', (function (_this) {
                return function () {
                    return _this._onMount();
                };
            })(this));
            this._dialog.addEventListener('imageuploader.rotateccw', (function (_this) {
                return function () {
                    return _this._onRotateCCW();
                };
            })(this));
            this._dialog.addEventListener('imageuploader.rotatecw', (function (_this) {
                return function () {
                    return _this._onRotateCW();
                };
            })(this));
            this._dialog.addEventListener('imageuploader.save', (function (_this) {
                return function () {
                    return _this._onSave();
                };
            })(this));
            this._dialog.addEventListener('imageuploader.unmount', (function (_this) {
                return function () {
                    return _this._onUnmount();
                };
            })(this));
        }

        ImageUploader.prototype._onCancel = function () { };

        ImageUploader.prototype._onCancelUpload = function () {
            clearTimeout(this._uploadingTimeout);
            return this._dialog.state('empty');
        };

        ImageUploader.prototype._onClear = function () {
            return this._dialog.clear();
        };

        ImageUploader.prototype._onFileReady = function (file) {
            var upload;
            console.log(file);
            this._dialog.progress(0);
            this._dialog.state('uploading');
            upload = (function (_this) {
                return function () {
                    var progress;
                    progress = _this._dialog.progress();
                    progress += 1;
                    if (progress <= 100) {
                        _this._dialog.progress(progress);
                        return _this._uploadingTimeout = setTimeout(upload, 25);
                    } else {
                        return _this._dialog.populate(ImageUploader.imagePath, ImageUploader.imageSize);
                    }
                };
            })(this);
            return this._uploadingTimeout = setTimeout(upload, 25);
        };

        ImageUploader.prototype._onMount = function () { };

        ImageUploader.prototype._onRotateCCW = function () {
            var clearBusy;
            this._dialog.busy(true);
            clearBusy = (function (_this) {
                return function () {
                    return _this._dialog.busy(false);
                };
            })(this);
            return setTimeout(clearBusy, 1500);
        };

        ImageUploader.prototype._onRotateCW = function () {
            var clearBusy;
            this._dialog.busy(true);
            clearBusy = (function (_this) {
                return function () {
                    return _this._dialog.busy(false);
                };
            })(this);
            return setTimeout(clearBusy, 1500);
        };

        ImageUploader.prototype._onSave = function () {
            var clearBusy;
            this._dialog.busy(true);
            clearBusy = (function (_this) {
                return function () {
                    _this._dialog.busy(false);
                    return _this._dialog.save(ImageUploader.imagePath, ImageUploader.imageSize, {
                        alt: 'Example of bad variable names'
                    });
                };
            })(this);
            return setTimeout(clearBusy, 1500);
        };

        ImageUploader.prototype._onUnmount = function () { };

        ImageUploader.createImageUploader = function (dialog) {
            return new ImageUploader(dialog);
        };

        return ImageUploader;

    })();

    window.ImageUploader = ImageUploader;

    window.onload = function () {
        var FIXTURE_TOOLS, editor, req;
        ContentTools.IMAGE_UPLOADER = ImageUploader.createImageUploader;
        ContentTools.StylePalette.add([new ContentTools.Style('By-line', 'article__by-line', ['p']), new ContentTools.Style('Caption', 'article__caption', ['p']), new ContentTools.Style('Example', 'example', ['pre']), new ContentTools.Style('Example + Good', 'example--good', ['pre']), new ContentTools.Style('Example + Bad', 'example--bad', ['pre'])]);
        editor = ContentTools.EditorApp.get();
        ContentTools.DEFAULT_TOOLS = [[
        'bold',
        'italic',
        'link',
        'align-left',
        'align-center',
        'align-right'
        ], [
        'heading',
        'subheading',
        'paragraph',
        'unordered-list',
        'ordered-list'
        ],
        [
        'undo',
        'redo',
        'remove'
        ]
        ];

       // ContentTools.DEFAULT_TOOLS[0].push('blockquote')


        editor.init('[data-editable], [data-fixture]', 'data-name');
        editor.addEventListener('saved', function (ev) {
            var saved;
            console.log(ev.detail().regions);
            if (Object.keys(ev.detail().regions).length === 0) {
                return;
            }
            editor.busy(true);
            saved = (function (_this) {
                return function () {
                    editor.busy(false);
                    if (calledBy !== 'autoSave') {
                        new ContentTools.FlashUI('ok');
                    }

                };
            })(this);
            return setTimeout(saved, 2000);
        });
        editor.addEventListener('save', function (regions, calledBy) {
            var name, onStateChange, payload, xhr;
            // Set the editor as busy while we save our changes
            if (calledBy !== 'autoSave') {
                this.busy(true);
            }
            // Collect the contents of each region into a FormData instance
            var currentForm = $('#new-knoeledge')[0];

            payload = new FormData(currentForm);
            // payload.append('proposal_id', proposal_id);
            payload.append('ActiveTopic.Html', editor.regions()['article'].html());


            // Send the update content to the server to be saved
            onStateChange = function (ev) {
                // Check if the request is finished
                if (ev.target.readyState == 4) {
                    editor.busy(false);
                    if (ev.target.status == '200') {
                        // Save was successful, notify the user with a flash
                        if (calledBy !== 'autoSave') {
                            new ContentTools.FlashUI('ok');
                        }
                    } else {
                        // Save failed, notify the user with a flash
                        new ContentTools.FlashUI('no');
                    }
                }
            };

            xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', onStateChange);
            xhr.open('POST', '/knowledge/new');
            xhr.send(payload);
        });

        FIXTURE_TOOLS = [['undo', 'redo', 'remove']];
        ContentEdit.Root.get().bind('focus', function (element) {
            var tools;
            if (element.isFixed()) {
                tools = FIXTURE_TOOLS;
            } else {
                tools = ContentTools.DEFAULT_TOOLS;
            }
            if (editor.toolbox().tools() !== tools) {
                return editor.toolbox().tools(tools);
            }
        });
        req = new XMLHttpRequest();
        req.overrideMimeType('application/json');
        req.open('GET', 'https://raw.githubusercontent.com/GetmeUK/ContentTools/master/translations/lp.json', true);
        return req.onreadystatechange = function (ev) {
            var translations;
            if (ev.target.readyState === 4) {
                translations = JSON.parse(ev.target.responseText);
                ContentEdit.addTranslations('lp', translations);
                return ContentEdit.LANGUAGE = 'lp';
            }
        };
    };

}).call(this);


// Initialize our editor
var editor = ContentTools.EditorApp.get();
editor.init('*[data-editable]', 'data-name');

// Add support for auto-save
editor.addEventListener('start', function (ev) {
    var _this = this;
    $('#edit-cover').removeClass('non-editable');
    // Call save every 30 seconds
    function autoSave() {
        //_this.save(editor.regions(), 'autoSave');
    };
    this.autoSaveTimer = setInterval(autoSave, 30 * 1000);
});

editor.addEventListener('stop', function (ev) {
    // Stop the autosave
    clearInterval(this.autoSaveTimer);
    $('#edit-cover').addClass('non-editable');
});


function allowEdit($this) {
    if ($this.hasClass('non-editable')) {
        return false;
    }
    return true;
}

function publish() {
    alert('haha');
    var editor = ContentTools.EditorApp.get();
    editor.save();
    $.post('/press/publish/' + $('#DraftID').val(), function () {

    });
}


$(document).ready(function () {
    $('#ActiveTopic_CategoryID').change(function () {
        $.getJSON('/Knowledge/Topics?categoryID=' + $(this).val(), function (response) {

            $(function () {
                $('#parenttopic').removeAttr('disabled');
                // create select tag
                $('#parenttopic').append(response.map(function (v) {
                    // generate option with value and text content
                    return $('<option>', {
                        text: v.Lable,
                        value: v.TopicID
                    })
                }))
            });
        })
    })

})