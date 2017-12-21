var SelfPortraitsViewModel = function () {
    var self = this;

    self.info = [{
        img: "img/sp1.jpg",
        title: "Self-Portrait with Grey Felt Hat",
        when:"Paris, September - October 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 44.5 cm x 37.2 cm ",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "Van Gogh painted this self-portrait in the winter of 1887-88, when he had been in Paris for almost two\
              years. It is clear from the work that he had studied the technique of the Pointillists and applied it in his\
              own, original way. He placed the short stripes of paint in different directions. Where they follow the outline\
              of his head, they form a kind of halo.<br><br> The painting is also one of Van Gogh's boldest colour\
              experiments in Paris. He placed complementary colours alongside one another using long brushstrokes: blue and\
              orange in the background, and red and green in the beard and eyes. The colours intensify one another. The red\
              pigment has faded, so the purple strokes are now blue, which means the contrast with the yellow is less powerful.",
    },
    {
        img: "img/sp2.jpg",
        title: "Self-Portrait as a Painter",
        when:"Paris, December 1887 - February 1888 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 65.1 cm x 50 cm ",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "<strong>Please note: This painting is not on view in the museum galleries at the moment. It will be part of the exhibition <i>Van Gogh &amp; Japan</i>, on view from 26 August 2017 in the Hokkaido Museum of Modern Art in Sapporo, after which it will travel to the Tokyo Metropolitan Art Museum and The National Museum of Modern Art in Kyoto.</strong></p>\
              <p>Van Gogh presented himself in this self-portrait as a painter, holding a palette and paintbrushes behind his\
                easel. He showed that he was a <i>modern</i> artist by using a new painting style, with bright, almost\
                unblended colours. The palette contains the complementary colour pairs red/green, yellow/purple and blue/orange\
                -; precisely the colours Van Gogh used for this painting. He laid these pairs down side by side to intensify\
                one another: the blue of his smock, for instance, and the orange-red of his beard.<br /><br /><i>Self-Portrait as a Painter</i>                was the last work Van Gogh produced in Paris; the city had exhausted him both mentally and physically. He\
                told his sister Wil how he had portrayed himself: 'wrinkles in forehead and around the mouth, stiffly\
                wooden, a very red beard, quite unkempt and sad'.",
    },
    {
        img: "img/sp3.jpg",
        title: "Self-Portrait with Straw Hat",
        when:"Paris, July - August 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 41.8 cm x 31.5 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "",
    },

    {
        img: "img/sp4.jpg",
        title: "Self-Portrait",
        when:"Paris, March - June 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on cardboard, 41 cm x 33 cm",
        credits:" Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "Around the world, people recognise this man with a red beard and an earnest look in his eyes. Vincent van Gogh\
                painted about 35 self-portraits in total, most of them in Paris. For him, this was a way of practising portrait\
                painting. His intention was not to portray himself as realistically as possible. He used the Neo-Impressionist\
                style here, with short, rough brushstrokes. These alternate with longer strokes, such as the orange in his\
                beard.<br /><br />The painting has discoloured. The background was originally blue with touches of dark red\
                paint, but the red has become almost completely transparent.",
    },

    {
        img: "img/sp5.jpg",
        title: "Self-Portrait with Straw Hat and Pipe",
        when:"Paris, July - August 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 42.5 cm x 32.1 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "",
    },
    
    {
        img: "img/sp6.jpg",
        title: "Self-Portrait",
        when:"Paris, July - August 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 43.2 cm x 31.3 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "",
    },

    {
        img: "img/sp7.jpg",
        title: "Self-Portrait",
        when:"Paris, July - August 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 43.2 cm x 34.5 cm ",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "",
    },
    {
        img: "img/sp8.jpg",
        title: "Self-Portrait",
        when:"Paris, July - August 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 44.5 cm x 33.6 cm ",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "During his time in Paris (1886-1888), Van Gogh painted more than 20 self-portraits. He probably had very little\
                money for models. That led him to take himself as an object of study. Here he portrays himself as an artist\
                in his blue smock-frock. This was what he wore when painting.<br /><br />Van Gogh painted this on the back\
                of a <i>Study for 'The Potato Eaters'</i>,\
                which he had made earlier in Nuenen (NL). By doing that, he avoided the costs not only of a model but also\
                of expensive canvas.",
    },
    
    {
        img: "img/sp9.jpg",
        title: "Self-Portrait",
        when:"Paris, March - June 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on cardboard, 19.1 cm x 14.1 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "",
    },
    {
        img: "img/sp10.jpg",
        title: "Self-Portrait",
        when:"Paris, summer 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on cardboard, 19.0 cm x 14.1 cm ",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "'People say - and I'm quite willing to believe it - that it's difficult to know oneself &ndash;\
                but it's not easy to paint oneself either,' Van Gogh once wrote to his brother Theo. He presents himself\
                in this self-portrait as a respectable bourgeois, wearing an elegant suit and felt hat.<br /><br />The small\
                painting is done in shades of pastel grey-blue. This was an unusual palette for Van Gogh, who even changed\
                the colour of his eyes to match it. In reality they were green, yet they are shown in this painting as grey-blue.\
                The bright red beard stands out strongly against all the grey tones.",
    },

    {
        img: "img/sp11.jpg",
        title: "Self-Portrait with Grey Felt Hat",
        when:"Paris, September - October 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 44.5 cm x 37.2 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "Van Gogh painted this self-portrait in the winter of 1887&ndash;88, when he had been in Paris for almost two\
                years. It is clear from the work that he had studied the technique of the Pointillists and applied it in\
                his own, original way. He placed the short stripes of paint in different directions. Where they follow the\
                outline of his head, they form a kind of halo.<br /><br />The painting is also one of Van Gogh&rsquo;s boldest\
                colour experiments in Paris. He placed complementary colours alongside one another using long brushstrokes:\
                blue and orange in the background, and red and green in the beard and eyes. The colours intensify one another.\
                The red pigment has faded, so the purple strokes are now blue, which means the contrast with the yellow is\
                less powerful.",
    },
    {
        img: "img/sp12.jpg",
        title: "Self-Portrait with Pipe",
        when:"Paris, September - November 1886 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 46.0 cm x 38.0 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "Van Gogh painted many self-portraits, more than 20 in Paris alone. In each one he looks different. He saw these\
                self-portraits as a way of practising the art of portraiture. So he experimented with facial expressions,\
                colours and forms.<br /><br />In Paris, Van Gogh had discovered the work of Adolphe Monticelli (1824-1886).\
                He admired this older French painter for his rich colour palette and thick application of paint.<br />In\
                this self-portrait he tried out Monticelli's approach to colour and light effects. The pale tones of his\
                face stand out starkly against the warm, dark red background.",
    },
    {
        img: "img/sp13.jpg",
        title: "Self-Portrait",
        when:"Paris, March - June 1886 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 27.2 cm x 19.0 cm ",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "",
    },
    {
        img: "img/sp14.jpg",
        title: "Self-Portrait as a painter",
        when:"Paris, September - November 1886 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 46.5 cm x 38.5 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "This one of the earliest self-portraits painted by Van Gogh &ndash; and the first in which he portrayed\
                himself as an artist. He stands at his field easel, holding his palette. After more than five years of practice\
                in the Netherlands and Antwerp (BE), he was eager to make his name as a painter in Paris.<br /><br />The\
                rectangular palette is covered with splotches of paint; each one is a pure, unmixed colour. At the top is\
                a small jar of turpentine for thinning the paint. There are two holes in the palette: in one we see Van Gogh's\
                thumb and in the other two brushes.",
    },
    {
        img: "img/sp15.jpg",
        title: "Self-Portrait with glass",
        when:"Paris, January 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 61.1 cm x 50.2 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "",
    },
    {
        img: "img/sp16.jpg",
        title: "Self-Portrait with Felt Hat",
        when:"Paris, December 1886 - January 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 41.5 cm x 32.5 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "In this self-portrait, Van Gogh is wearing a black felt hat, an overcoat and a tie (cravat). He looks like\
                a respectable gentleman.<br /><br />An X-ray image of this work makes it clear that Van Gogh painted it over\
                another painting. He had made that earlier study - of a standing nude woman - in the atelier\
                of Fernand Cormon (1845-1924) in Paris. He took lessons there in the spring of 1886. Instead of scraping\
                off the painting beneath this one, he painted his self-portrait over it. He did, however, cover the woman\
                with a new ground layer first.",
    },
    {
        img: "img/sp17.jpg",
        title: "Self-Portrait with Pipe and Straw Hat",
        when:"Paris, September - October 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on canvas, 41.9 cm x 30.1 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "This sketchy self-portrait is an example of the amazingly rapid progress Van Gogh made in Paris. The summery\
                  palette and loose brushwork betray the influence of the Impressionists. The smock, hat and background consist\
                  of large, outlined areas of colour. The face and beard are built up in more detail using different tones.<br\
                  /><br />Van Gogh was practising painting portraits. Because models were expensive, he bought a good mirror\
                  and used himself as his subject. He later wrote to his brother Theo: 'because if I can manage to paint\
                  the coloration of my own head, which is not without presenting some difficulty, I'll surely be able to\
                  paint the heads of the other fellows and women as well.'",
    },
    {
        img: "img/sp18.jpg",
        title: "Self-Portrait with Straw Hat",
        when:"Paris, August - September 1887 Vincent van Gogh (1853 - 1890)",
        what:"oil on cardboard, 40.9 cm x 32.8 cm",
        credits:"Credits (obliged to state): Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)",
        description: "Wearing light summer clothes, the artist examines us with one blue and one green eye.<br />For this self-portrait,\
              Van Gogh used an inexpensive alternative to canvas: cardboard. He then applied a layer of priming with dashes\
              of purple. But the pigment in that purple paint has largely faded over time. A few strokes of pink are still\
              faintly visible in his shoulder. The original colours, carefully composed by Van Gogh, have therefore been\
              lost. For instance, the purple background once contrasted with his yellow straw hat.",
    },
    ];

    //the portraitId is determined using the url
    self.commentsUrl = "https://marjac.herokuapp.com/comments/"
    self.portraitId = parseInt(window.location.search.replace("?", ""));
    
    //ensures that the right information is displayed for each portrait
    self.info_index = ko.observable(self.portraitId - 1);
    self.selected_info = ko.pureComputed(function(){
        return self.info[self.info_index()]
    });

    //values of the input fields
    self.comments = ko.observableArray();
    self.newCommentName = ko.observable("");
    self.newCommentText = ko.observable("");
    self.newCommentAnonymous = ko.observable(false);
    self.newCommentRating = ko.observable(0);

    //reverses the order of the array such that the newest comments appear at the front of the timeline
    //and a chronological order is maintained.
    self.reverse = ko.pureComputed(function() {
        var copy = self.comments().slice();
        copy.reverse();
        return copy;
    });


    //when a star is clicked, the rating linked to that star becomes the newCommentRating.
    self.setRating = function(rating) {
        self.newCommentRating(rating);
    }
    
    //submit the comment
    self.submitComment = function() {
        var comment = {
            name: self.newCommentAnonymous() ?  "Anonymous":  self.newCommentName(),
            comment: self.newCommentText(),
            rating: self.newCommentRating(),
            portrait_id: self.portraitId
        }
        $.post(self.commentsUrl, comment)
            .then(function(data) {
                self.comments.push(data);
            }).done();
        clear();//clear the input fields after submitting
    }   
    //function that cleares the input field
    function clear(){
        self.newCommentName("");
        self.newCommentText("");
        self.newCommentAnonymous(false);
        self.newCommentRating(0);
    }
    //retrieval of data from the database to display on the website.
    $.get(self.commentsUrl,{ portrait_id: self.portraitId})
        .then(function(data){
            self.comments(data);
        }).done();

}

ko.applyBindings(new SelfPortraitsViewModel());
