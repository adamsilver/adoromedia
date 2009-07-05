<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<%
if(typeof Adoro !== "object") var Adoro = {};
Adoro.URL = "http://www.adoromedia.com/";
Adoro.siteSection = "blog";
%>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" dir="<$BlogLanguageDirection$>">
	<head>
		<title><$BlogPageTitle$>, Adoro Media Ltd</title>
		<$BlogMetaData$>
		<script type="text/javascript" src="<%=Adoro.URL%>js/JQuery/jquery-1.2.6.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>js/Adoro/Adoro.js"></script>
		<script type="text/javascript" src="<%=Adoro.URL%>js/Adoro/Adoro.Logo.js"></script>
		<link rel="stylesheet" href="<%=Adoro.URL%>css/default.css" type="text/css" />
		<link rel="stylesheet" href="<%=Adoro.URL%>css/blog.css" type="text/css" />
		<link rel="shortcut icon" href="<%=Adoro.URL%>img/favicon.ico" type="image/x-icon" />
		<!--[if IE 7]><link rel="stylesheet" href="<%=Adoro.URL%>css/ie7-patch.css" type="text/css" /><![endif]-->
		<!--[if IE 6]><link rel="stylesheet" href="<%=Adoro.URL%>css/ie6-patch.css" type="text/css" /><![endif]-->
	</head>
	<body id="blog">
		<div id="container">
			<div class="faux">
				<div id="controls">
					<a id="logo" href="<%=Adoro.URL%>default.asp"><img src="<%=Adoro.URL%>img/logo.gif" alt="Home page"/></a>
					
					<div id="primaryNavigation">
						<ul>
							<li><a href="<%=Adoro.URL%>default.asp" <%if(Adoro.pageName === "home"){%>class="selected"<%}%>>Home</a></li>
							<li><a href="<%=Adoro.URL%>aboutus.asp" <%if(Adoro.pageName === "aboutus"){%>class="selected"<%}%>>About us</a></li>
							<li><a href="<%=Adoro.URL%>portfolio.asp" <%if(Adoro.pageName === "portfolio"){%>class="selected"<%}%>>Portfolio</a></li>
							<li><a href="<%=Adoro.URL%>projects/" <%if(Adoro.siteSection === "projects"){%>class="selected"<%}%>>Projects</a></li>
							<li><a href="<%=Adoro.URL%>blog" <%if(Adoro.siteSection === "blog"){%>class="selected"<%}%>>Blog</a></li>
							<li><a href="<%=Adoro.URL%>contact.asp" <%if(Adoro.pageName === "contact"){%>class="selected"<%}%>>Contact</a></li>
						</ul>
					</div>
					
				</div>
				<div id="content">
					<div id="blogPrimaryPanel">
						
						<MainPage>
							<p class="latest">Latest post</p>
							<!--<h1><a href="<$BlogURL$>"><$BlogTitle$></a></h1>-->
							<!--<p class="description"><$BlogDescription$></p>-->
						</MainPage>
					
						<ArchivePage>
							<h1>Archive</h1>
						</ArchivePage>
										
						<Blogger>
							<BlogDateHeader><p class="date-header"><$BlogDateHeaderDate$></p></BlogDateHeader>
							<div class="post">
								<a name="<$BlogItemNumber$>"></a>
								<BlogItemTitle>
									<MainPage>
										<h1>
											<BlogItemUrl>
												<a href="<$BlogItemUrl$>" title="external link">
											</BlogItemUrl>
											
											<a href="<$BlogItemPermalinkURL$>"><$BlogItemTitle$></a>
											
											<BlogItemUrl>
												</a>
											</BlogItemUrl>
										</h1>
									</MainPage>
									
									<ArchivePage>
										<h2><$BlogItemTitle$></h2>
									</ArchivePage>
									<ItemPage>
										<h1><$BlogItemTitle$></h1>
									</ItemPage>
								</BlogItemTitle>
								
								
								
								
								
								<div class="post-body">
									<$BlogItemBody$>
								</div>
								
								<p class="post-footer">
									<$I18NPostedByAuthorNickname$>
									<$I18NAtTimeWithPermalink$>
									<MainOrArchivePage>
										<BlogItemCommentsEnabled>
											<a class="comment-link" href="<$BlogItemCommentCreate$>"<$BlogItemCommentFormOnclick$>><span style="text-transform:lowercase"><$I18NNumComments$></span></a>
										</BlogItemCommentsEnabled>
										<BlogItemBacklinksEnabled>			
											<a class="comment-link" href="<$BlogItemPermalinkUrl$>#links"><span style="text-transform:lowercase"><$I18NLinksToThisPost$></span></a>
										</BlogItemBacklinksEnabled>
									</MainOrArchivePage>
									<$BlogItemControl$>
								</p>
							</div>
							<!-- Begin #comments -->
							<ItemPage>
								<div id="comments">
									<BlogItemCommentsEnabled>
										<a name="comments"></a>
										<h4><$I18NNumComments$>:</h4>
										<dl id="comments-block">
											<$CommentPager$>
											<BlogItemComments>
												<dt class="comment-poster" id="<$BlogCommentAnchorName$>">
													<a name="<$BlogCommentAnchorName$>"></a>
													<$I18NCommentAuthorSaid$>
												</dt>
												<dd class="comment-body">
													<p><$BlogCommentBody$></p>
												</dd>
												<dd class="comment-timestamp">
													<a href="<$BlogCommentPermalinkURL$>" title="comment permalink"><$BlogCommentDateTime$></a>
													<$BlogCommentDeleteIcon$>
												</dd>
											</BlogItemComments>
									    	<$CommentPager$>
							    		</dl>
										<p class="comment-timestamp"><$BlogItemCreate$></p>
										<p id="postfeeds"><$BlogItemFeedLinks$></p>
									</BlogItemCommentsEnabled>
									<BlogItemBacklinksEnabled>
										<a name="links"></a>
										<h4><$I18NLinksToThisPost$>:</h4>
										<dl id="comments-block">
											<BlogItemBacklinks>
												<dt class="comment-title">
							        				<$BlogBacklinkControl$>
							       					<a href="<$BlogBacklinkURL$>" rel="nofollow"><$BlogBacklinkTitle$></a> 
													<$BlogBacklinkDeleteIcon$>
												</dt>
												<dd class="comment-body">
													<$BlogBacklinkSnippet$><br />
													<span class="comment-poster">
														<$I18NPostedByBacklinkAuthor$> @ <$BlogBacklinkDateTime$>
													</span>
												</dd>
											</BlogItemBacklinks>
										</dl>
										<p class="comment-timestamp"><$BlogItemBacklinkCreate$></p>
									</BlogItemBacklinksEnabled>
									<p class="comment-timestamp"><a href="<$BlogURL$>"><$I18NHome$></a></p>
								</div>
							</ItemPage>
						</Blogger>
					</div>
					
					<div id="blogSidePanel">						
						<!-- Begin #profile-container -->
						<$BlogMemberProfile$>
						<!-- End #profile -->
						
						<div class="previousPosts">
							<h2 class="sidebar-title"><$I18NPreviousPosts$></h2>
							<ul class="generic">
								<BloggerPreviousItems>
									<li><a href="<$BlogItemPermalinkURL$>"><$BlogPreviousItemTitle$></a></li>
								</BloggerPreviousItems>
							</ul>
						</div>
					
						<MainOrArchivePage>
							<div class="archives">
								<h2 class="sidebar-title"><$I18NArchives$></h2>
								<ul class="archive-list generic">
									<BloggerArchives>
										<li><a href="<$BlogArchiveURL$>"><$BlogArchiveName$></a></li>
									</BloggerArchives>
								</ul>
							</div>
						</MainOrArchivePage>
						
						<div class="information">
							<h2>Blog information</h2>
							<ul class="generic">
								<li><a href="http://www.blogger.com">Powered by Blogger</a></li>
								<li><$BlogFeedsVertical$></li>
							</ul>							
						</div>
					</div>					
					
					
				</div>
			</div>
		</div>
		<div id="footer">
			<p>&copy; Copyright 2008 Adoro Media Limited. All rights reserved.</p>
			<p>Company registration 06584541. VAT 932 1151 63.
			Powered by <a href="http://www.j-squared.info">JSquared</a>.</p>
		</div>
	</body>
</html>