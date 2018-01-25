<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>

<div id="Empresas_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="Empresas.instance()">

	<div class="bs-example">
		<div class="row">
			<div class="col-md-12 scrooltable" id="target" data-isolated-scroll>

				<script type="text/template" class="mydatatable-template-row-area-buttons">
					<div id="datatable-area" class="panel-heading">
						<div class="row">
							<div id="datatable-area-action" class="col-md-9">
								<button class="btn btn-primary" data-datatable-add-row>Add
								</button>
								<button class="btn btn-primary" data-datatable-del-row>Remove
								</button>
								<button class="btn btn-primary" data-datatable-edit-row>Edit
								</button>
								<div class="btn-group">
									<button type="button" class="btn btn-primary dropdown-toggle"
										data-toggle="dropdown" aria-expanded="false">
										More
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu" role="menu">
										<li>
											<a data-datatable-show-column href="#">Show column 2</a>
										</li>
										<li>
											<a data-datatable-hide-column href="#">Hide column 2</a>
										</li>
										<li>
											<a data-datatable-reload href="#">Reload</a>
										</li>
										<li>
											<a data-datatable-selected href="#">Selected</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</script>

				<div id="idtable_${instanceId}"></div>



			</div>
		</div>
	</div>
	
</div>

