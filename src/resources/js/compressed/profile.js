!function(a){var b={postParameters:{userId:a(".user-photo").attr("data-user")},containerSelector:".user-photo",uploadAction:"users/upload-user-photo",deleteAction:"users/delete-user-photo",uploadButtonSelector:".btn.upload-photo",deleteButtonSelector:".btn.delete-photo",fileInputSelector:"input[name=userphoto]",onAfterRefreshImage:function(b){"undefined"!=typeof b.html&&"undefined"!=typeof changeSidebarPicture&&changeSidebarPicture&&a("#user-photo").find("> img").replaceWith(a("#current-photo").find("> img").clone())}};new Craft.ImageUpload(b)}(jQuery);
//# sourceMappingURL=profile.js.map