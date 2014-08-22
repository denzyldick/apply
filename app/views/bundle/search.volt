
{{ content() }}

<table width="100%">
    <tr>
        <td align="left">
            {{ link_to("bundle/index", "Go Back") }}
        </td>
        <td align="right">
            {{ link_to("bundle/new", "Create ") }}
        </td>
    </tr>
</table>

<table class="browse" align="center">
    <thead>
        <tr>
            <th>Idbundle</th>
            <th>Amount</th>
            <th>Price</th>
         </tr>
    </thead>
    <tbody>
    {% if page.items is defined %}
    {% for bundle in page.items %}
        <tr>
            <td>{{ bundle.getIdbundle() }}</td>
            <td>{{ bundle.getAmount() }}</td>
            <td>{{ bundle.getPrice() }}</td>
            <td>{{ link_to("bundle/edit/"~bundle.getIdbundle(), "Edit") }}</td>
            <td>{{ link_to("bundle/delete/"~bundle.getIdbundle(), "Delete") }}</td>
        </tr>
    {% endfor %}
    {% endif %}
    </tbody>
    <tbody>
        <tr>
            <td colspan="2" align="right">
                <table align="center">
                    <tr>
                        <td>{{ link_to("bundle/search", "First") }}</td>
                        <td>{{ link_to("bundle/search?page="~page.before, "Previous") }}</td>
                        <td>{{ link_to("bundle/search?page="~page.next, "Next") }}</td>
                        <td>{{ link_to("bundle/search?page="~page.last, "Last") }}</td>
                        <td>{{ page.current~"/"~page.total_pages }}</td>
                    </tr>
                </table>
            </td>
        </tr>
    <tbody>
</table>
