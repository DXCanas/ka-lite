// Views

/**
 * View that wraps the content resume card on the learn page
 */

window.ContentRecLanding = BaseView.extend({

    template: HB.template("contentrec/content-rec-landing"),
    
    initialize: function() {
        this.model = new Backbone.Model();
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
    }

});
window.ContentResumeView = BaseView.extend({

    template: HB.template("contentrec/content-resume"),
    
    initialize: function() {
        this.model = new Backbone.Model();
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
    }

});

window.ContentRecView = BaseView.extend({

    template: HB.template("contentrec/content-rec"),
    
    initialize: function() {
        this.model = new Backbone.Model();
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
    }

});

$(function(){
	//window.content_resume = new ContentResumeView();
	//$("#content-area").append(window.content_resume.$el);
	window.content_rec_landing = new ContentRecLanding({
		el: "#content-area"
	});
});

$(function ResumeCard(resumeContainer){
	window.content_resume = new ContentResumeView({
		el:"#resumeCard"
	});
});

$(function NextStepsCard(nextStepsContainer){
	window.next_steps = new NextStepsView({
		el:"#nextStepsCard"
	});
});

$(function ContentRecCard(contentRecContainer){
	window.content_rec = new ContentRecView({
		el:"#contentRecCard"
	});
});
