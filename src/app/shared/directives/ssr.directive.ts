import {Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef} from '@angular/core';
import {isPlatformServer} from '@angular/common';

@Directive({
    standalone: true,
    selector: '[SSR]'
})
export class SSRDirective implements OnInit {

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        @Inject(PLATFORM_ID) private platformId: any
    ) { }

    ngOnInit() {
        if (isPlatformServer(this.platformId)) {
            this.viewContainer.clear();
        } else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }

    }
}