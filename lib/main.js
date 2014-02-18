$(function() {
    var names = $('.name');

    var projects = [];
    var projectNames = [];
    names.each(function() {
        var id = $(this).closest('.resource_dates').attr('id').split('_')[1];
        if ($('r_' + id).css('display') !== 'none') {
            projectNames.push($(this).text());
            projects.push({
                project: $(this).text(),
                days: $(this).closest('.booking').attr('days')
            });
        }
    });

    projectNames = _.uniq(projectNames);
    projectNames.sort();

    var projectList = [];

    _.each(projectNames, function(val) {
        var days = 0;
        var project = _.where(projects, {project: val});

        var dayList = _.map(project, function(p) {
            days += parseInt(p.days, 10);
        });

        console.log(val + ' has been worked on for ' + days + ' days.');
    });
});
