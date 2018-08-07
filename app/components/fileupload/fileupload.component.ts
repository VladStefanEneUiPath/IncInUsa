import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import * as Camera  from "nativescript-camera";
import { ImageFormat } from "ui/enums";
import { Image } from "ui/image";
import * as bghttp from "nativescript-background-http";
import * as imagepicker from "nativescript-imagepicker";
import * as FileSystem from "file-system";
import { Observable } from "rxjs";
import {Page} from "ui/page";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
const imageSourceModule = require("tns-core-modules/image-source")

var appSettings = require("application-settings");

@Component({
    selector: "Fileupload",
    moduleId: module.id,
    templateUrl: "./fileupload.component.html"
})
export class FileuploadComponent implements OnInit {
  
	public selectedIndex = 1;
    public items: Array<string>;


    imageSrc: any;
	isSingleMode: boolean = true;
	imageSelected: boolean = false;
    thumbSize: number = 80;
	previewSize: number = 200;
	docType :string;
	docNumber :number;

	constructor(private page: Page) {
		page.actionBarHidden = true;
		this.items = [];
	}

    ngOnInit(): void {
		// Init your component properties here.
		this.page.addCss("#step2 {visibility: collapsed}");
		this.items.push("Second");
		this.items.push("Passaport");
	}
	
	public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed"`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
	}
	
	public showOptions() {
		this.page.addCss("#step1 {visibility: collapsed}");
		this.page.addCss("#step2 {visibility: visible}");
		this.page.addCss(".hide-border {border-bottom-color: #dedede}");
	}


	public hideOptions() {
		this.page.addCss("#step2 {visibility: collapsed}");
		this.page.addCss("#step1 {visibility: visible}");
		this.page.addCss(".hide-border {border-bottom-color: white}");
	}
	
    public onSelectSingleTap() {
		this.isSingleMode = true;
        let context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    }

    private startSelection(context) {
		appSettings.setString("stringKey", "String value");  // Writing
        let that = this;
		let session = bghttp.session("image-upload");
        context
        .authorize()
        .then(() => {
            return context.present();
        })
        .then((selection) => {
			that.imageSrc = selection.length > 0 ? selection[0] : null;
			this.imageSelected = true;

			that.upload("http://httpbin.org/post", that.imageSrc['_android']);
        }).catch(function (e) {
            console.log(e);
        });
	}
	
	public takePicture() {
		console.log("start");
		Camera.takePicture({saveToGallery: false, width: 320, height: 240 }).then(picture => {
			let folder = FileSystem.knownFolders.documents();
			let path = FileSystem.path.join(folder.path, (new Date()) + ".png");
			imageSourceModule.fromAsset(picture)
			.then(imageSource => {
				 let saved = imageSource.saveToFile(path, "png");
				 console.log(saved);
				 this.imageSelected = true;
				 this.imageSrc = path;
				 this.imageSelected = true;
				 this.upload("http://httpbin.org/post", path);
			 });
		});
	}
	public extractImageName(fileUri) {
		var pattern = /[^/]*$/;
		var imageName = fileUri.match(pattern);
	
		return imageName;
	}
	public upload(destination: string, filepath: string) {
            let session = bghttp.session("image-upload");
			let imageName = this.extractImageName(filepath);

			var request = {
				url: "http://httpbin.org/post",
				method: "POST",
				headers: {
					"Content-Type": "application/octet-stream",
					"File-Name": imageName
				},
				description: "{ 'uploading': " + imageName + " }"
			};
			let task = session.uploadFile(filepath, request);
			task.on("complete", (event) => {
				console.log("complete");
			});
			task.on("error", event => {
				console.log(event);
			});
	}
}