import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadCrumb } from '@models/breadcrumbs.models';
import { NftsService } from '@services/nfts.service';
import { distinctUntilChanged, filter } from 'rxjs';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  public breadcrumbs: Array<BreadCrumb>;
  public selectedYears: string[] = [];
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private nftsService: NftsService
  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events.pipe(
        filter((event: unknown) => event instanceof NavigationEnd),
        distinctUntilChanged(),
    ).subscribe(() => {
      this.selectedYears = this.extractSelectedYears(); // Update selected years
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    })
  }

  private extractSelectedYears(): string[] {
    const queryParams = this.activatedRoute.snapshot.queryParamMap.get('years');
    return queryParams ? queryParams.split(',') : [];
  }

  private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const lastRoutePart = path ? path.split('/').pop(): "";
    const isDynamicRoute = lastRoutePart!.startsWith(':');
    if(isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart!.split(':')[1];
      const paramValue = route.snapshot.params[paramName];
      path = path!.replace(lastRoutePart!, paramValue);
      if (paramName === "id") {
        const name = this.extractNameFromId(paramValue);
        label = name || paramValue;
      } else {
        label = paramValue;
      }
    }
    const nextUrl = path ? `${url}/${path}` : url;
    const baseBreadcrumb: BreadCrumb = {
      label: label,
      url: nextUrl,
      queryParams: {years: []},
    };
    const newBreadcrumbs = label ? [...breadcrumbs, baseBreadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    } else {
      const queryParams = route.snapshot.queryParamMap.get('years');
      if (queryParams) {
        const years = queryParams.split(',');
        years.forEach((year) => {
          newBreadcrumbs.push({
            label: year,
            url: nextUrl,
            queryParams: { years: year },
          });
        });
      }
    }
    return newBreadcrumbs;
  }

  private extractNameFromId(id: string): string | null {
    return this.nftsService.getNftById(id)!.name || null;
  }
}
