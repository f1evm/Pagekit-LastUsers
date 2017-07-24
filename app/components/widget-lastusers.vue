<template>

    <div class="uk-grid pk-grid-large pk-width-sidebar-large" data-uk-grid-margin>
        <div class="pk-width-content uk-form-horizontal">
            <div class="uk-form-row">
                <label for="form-title" class="uk-form-label">{{ 'Widget Title' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-title" class="uk-form-width-large" type="text" name="title" v-model="widget.title"
                           v-validate:required>
                    <p class="uk-form-help-block uk-text-danger"
                       v-show="form.title.invalid">{{ 'Title cannot be blank.' | trans }}</p>
                </div>
            </div>
            <div class="uk-form-row">
                <label for="form-count" class="uk-form-label">{{ 'Number of Users (0 for all)' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-count" class="uk-form-width-small uk-text-right" type="number" name="count"
                           v-model="widget.data.count" min="0" number>
                </div>
            </div>
            <div class="uk-form-row">
                <label for="form-showusername" class="uk-form-label">{{ 'Show UserName' | trans }}</label>
                <div class="uk-form-controls uk-form-controls-text">
                    <input id="form-showusername" type="checkbox" v-model="widget.data.showusername">
                </div>
            </div>
            <div class="uk-form-row">
                <label for="form-showfullname" class="uk-form-label">{{ 'Show Full Name' | trans }}</label>
                <div class="uk-form-controls uk-form-controls-text">
                    <input id="form-showfullname" type="checkbox" v-model="widget.data.showfullname">
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-order" class="uk-form-label">{{ 'Order' | trans }}</label>
                <div class="uk-form-controls uk-form-controls-text">
                    <input type="radio" name="form-order" value="0" v-model="widget.data.order"> {{ 'Oldest first' | trans }}
                    <input type="radio" name="form-order" value="1" v-model="widget.data.order"> {{ 'Newest first' | trans }}

                    </select>
                </div>
            </div>


        </div>
        <div class="pk-width-sidebar">
            <partial name="settings"></partial>
        </div>
    </div>

</template>

<script>
module.exports = {
    section: {
        label: 'Settings'
    },
    replace: false,
    props: ['widget', 'config', 'form'],
    data() {
        return {
        }
    },
    created() {
        this.$options.partials = this.$parent.$options.partials;
        this.$set('widget.data', _.merge({
            count: 5,
            showusername: true,
            showfullname: false,
            order: 0
        }, this.widget.data));
    }
};
window.Widgets.components['fevm-lastusers:settings'] = module.exports;
</script>
