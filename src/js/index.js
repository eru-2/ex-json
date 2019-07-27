$(document).ready(function() {
	$("#category").select2({data: CATEGORY})
	$("#language").select2({data: LANG});
	$("#tag-f").select2({data: TAG_F});
	$("#tag-m").select2({data: TAG_M});
	$("#tag-misc").select2({data: TAG_MISC});
	$("#group").select2({data: GROUP});
	$("#artist").select2({data: ARTIST});
	$("#char").select2({data: CHAR});
	$("#parody").select2({data: PARODY});

	$(document).on("click", "#btn-generate", function(e) {

		var pid = parseInt($("#pid").val());
		var gid = parseInt($("#gid").val());
		var category = $("#category").select2("val");
		var title = $("#title").val();
		var title_original = $("#title-o").val();
		var language = $("#language").select2("val");
		var group = $("#group").select2("val");
		var artist = $("#artist").select2("val");
		var parody = $("#parody").select2("val");
		var character = $("#char").select2("val");
		var tag_f = $("#tag-f").select2("val");
		var tag_m = $("#tag-m").select2("val");
		var tag_misc = $("#tag-misc").select2("val");

		var data = {};
		data.gallery_info = {};
		data.gallery_info.title = title;
		data.gallery_info.title_original = title_original
		data.gallery_info.category = category;
		data.gallery_info.tags = {};
		data.gallery_info.language = language;
		data.gallery_info.source = {};
		data.gallery_info.source.site = "ex-hentai";
		data.gallery_info.source.gid = gid;
		data.gallery_info.source.parent_gallery = {};
		data.gallery_info.source.parent_gallery.gid = pid;
		data.gallery_info_full = {};
		data.gallery_info_full.gallery = {};
		data.gallery_info_full.gallery.gid = gid;
		data.gallery_info_full.title = title;
		data.gallery_info_full.title_original = title_original;
		data.gallery_info_full.category = category;
		data.gallery_info_full.parent = {};
		data.gallery_info_full.parent.gid = pid;
		data.gallery_info_full.language = language;
		data.gallery_info_full.tags = {};
		data.gallery_info_full.source_site = "ex-hentai";

		var str;
		var vals;

		// get unlisted data
		str = $("#group-t").val();
		if (group.length > 0 || str.trim() != "") {
			vals = str.split(";");
			for (var i = vals.length - 1; i >= 0; i--) {
				vals[i] = vals[i].trim();
				if (vals[i] == "") vals.splice(i, 1);
			}
			group = group.concat(vals);
			group = [...new Set(group)];
			data.gallery_info.tags.group = group;
			data.gallery_info_full.tags.group = group;
		}

		str = $("#artist-t").val();
		if (artist.length > 0 || str.trim() != "") {
			vals = str.split(";");
			for (var i = vals.length - 1; i >= 0; i--) {
				vals[i] = vals[i].trim();
				if (vals[i] == "") vals.splice(i, 1);
			}
			artist = artist.concat(vals);
			artist = [...new Set(artist)];
			data.gallery_info.tags.artist = artist;
			data.gallery_info_full.tags.artist = artist;
		}

		str = $("#char-t").val();
		if (character.length > 0 || str.trim() != "") {
			vals = str.split(";");
			for (var i = vals.length - 1; i >= 0; i--) {
				vals[i] = vals[i].trim();
				if (vals[i] == "") vals.splice(i, 1);
			}
			character = character.concat(vals);
			character = [...new Set(character)];
			data.gallery_info.tags.character = character;
			data.gallery_info_full.tags.character = character
			console.log(character);
		}

		if (parody.length > 0 || str.trim() != "") {
			str = $("#parody-t").val();
			vals = str.split(";");
			for (var i = vals.length - 1; i >= 0; i--) {
				vals[i] = vals[i].trim();
				if (vals[i] == "") vals.splice(i, 1);
			}
			parody = parody.concat(vals);
			parody = [...new Set(parody)];
			data.gallery_info.tags.parody = parody;
			data.gallery_info_full.tags.parody = parody;
		}

		if (tag_m.length > 0) {
			data.gallery_info.tags.male = tag_m;
			data.gallery_info_full.tags.male = tag_m;
		}

		if (tag_f.length > 0) {
			data.gallery_info.tags.female = tag_f;
			data.gallery_info_full.tags.female = tag_f;
		}

		if (tag_misc.length > 0) {
			data.gallery_info.tags.misc = misc
			data.gallery_info_full.tags.misc = misc;
		}

		$("#output").val(JSON.stringify(data, null, 2));

	})

	$(document).on("click", "#btn-copy", function(e) {
		$("#output").select();
		document.execCommand('copy');
		$("#output").blur();
	});

})