
<#import "/wcm.ftl" as wcm/>
<@wcm.header />

<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

	<@wcm.menu />

	<!-- Wrapper -->
	<div class="wcm-all-content">
		<div id="wcm-content" class="clearfix wcm-background">

			<#if pageRender.isEditMode()=true>
			<div name="formatBar" id="formatBar"></div>
			<div id="edicaoPagina" class="clearfix">
				<#else>
				<div id="s" class="clearfix">
					</#if>

					<!-- Slot 1 -->
					<div id="divSlot1" class="editable-slot slotfull layout-2-3left">
						<@wcm.renderSlot id="SlotA"
						editableSlot="true" />
					</div>

				</div>
			</div>
		</div>
	</div>
</div>